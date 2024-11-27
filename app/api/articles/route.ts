import { env } from '@/lib/env';
import { Article } from '@/types/article';
import axios from 'axios';

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  // Extract query parameters, with default values
  const page: number = Number(searchParams.get('page') || 1);
  const perPage: number = Number(searchParams.get('per_page') || 10);
  const tag: string | null = searchParams.get('tag');
  const category: string | null = searchParams.get('category');

  const apiKey: string | undefined = env.DEVTO_API_KEY;
  const apiUrl = 'https://dev.to/api/articles/me';

  if (!apiKey) {
    return new Response(JSON.stringify({ message: 'API key is missing' }), {
      status: 500,
    });
  }

  try {
    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append('page', page.toString());
    queryParams.append('per_page', perPage.toString());
    if (tag) queryParams.append('tag', tag);
    if (category) queryParams.append('category', category);

    // Fetch data from dev.to API
    const response = await axios.get<{ data: Article[] }>(
      `${apiUrl}?${queryParams.toString()}`,
      {
        headers: {
          'api-key': apiKey,
        },
      },
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching articles' }),
      { status: 500 },
    );
  }
}
