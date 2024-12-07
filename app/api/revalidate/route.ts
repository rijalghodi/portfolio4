'use server';

import { revalidatePath } from 'next/cache';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

/**
 * Retrieves and decodes the token from cookies.
 * @param req - The Next.js API request object
 * @returns The decoded JWT payload if valid, otherwise throws an error
 */
function getAndVerifyToken(req: NextRequest) {
  const token = req.cookies.get?.('rijalghodi.dev.token')?.value;

  if (!token) {
    throw new Error('Token not found');
  }

  return jwt.verify(token, JWT_SECRET as string);
}

/**
 * Validates the request method and throws an error if not POST.
 * @param req - The Next.js API request object
 */
function validateRequestMethod(req: NextRequest) {
  if (req.method !== 'POST') {
    throw new Error('Method not allowed');
  }
}

/**
 * Revalidates the specified path.
 * @param path - The path to revalidate
 */
function revalidate(path: string) {
  if (!path) {
    throw new Error('Path is required');
  }

  revalidatePath(path);
}

export async function POST(req: NextRequest) {
  try {
    validateRequestMethod(req);

    getAndVerifyToken(req);

    const body = await req.json();
    const { path } = body;

    revalidate(path);

    return new Response(JSON.stringify({ message: `Revalidated ${path}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message || 'An error occurred' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
