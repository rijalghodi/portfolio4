import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const username = process.env.DEVTO_USERNAME;
  const apiKey = process.env.DEVTO_API_KEY;
  const apiUrl = `https://dev.to/api/articles/${username}/${slug}`; // Endpoint to fetch articles by slug

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key is missing in the environment.' },
      { status: 500 },
    );
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'api-key': apiKey,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching article:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch article.', details: error.message },
      { status: 500 },
    );
  }
}
