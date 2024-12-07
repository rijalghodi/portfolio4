import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { LRUCache } from 'lru-cache';

const JWT_SECRET = process.env.JWT_SECRET!;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD!;

// LRU Cache for storing request counts
const rateLimiter = new LRUCache<string, number>({
  max: 1000, // Maximum unique users in memory
  ttl: 5 * 60 * 1000, // 5-minute time-to-live
});

export async function POST(req: NextRequest) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Email and password are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const ip =
      req.headers.get('x-forwarded-for') ||
      req.ip || // Next.js automatically extracts the IP
      'unknown';

    // Throttling logic
    const requestCount = rateLimiter.get(ip) || 0;

    if (requestCount >= 10) {
      return new Response(
        JSON.stringify({ message: 'Too many requests. Try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Increment request count for the current IP
    rateLimiter.set(ip, requestCount + 1);

    // Authentication logic
    if (password !== AUTH_PASSWORD) {
      return new Response(JSON.stringify({ message: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `rijalghodi.dev.token=${token}; Path=/; Secure; SameSite=Strict; Max-Age=604800`,
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
