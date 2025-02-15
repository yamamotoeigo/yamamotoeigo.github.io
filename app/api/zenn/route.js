// app/api/zenn/route.js

export async function GET() {
    try {
      const response = await fetch('https://zenn.dev/api/articles?username=yama_moto');
  
      // Zenn API がエラーを返した場合の対処
      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch data from Zenn API' }),
          { status: response.status }
        );
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error fetching from Zenn API:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  