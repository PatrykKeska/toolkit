import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
export async function POST(request: Request, response: NextApiResponse) {
  if (request.method == "OPTIONS") {
    return response.status(200).send(null);
  }

  const origin = request.headers.get("origin");
  const body = await request.json();
  console.log(body);

  return new NextResponse(
    JSON.stringify({
      message: "Wiadomość zostła wysłana. Dziękujemy!",
      success: true,
    }),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
    },
  );
}
