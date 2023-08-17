import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const origin = req.headers.get("origin");
  const body = await req.json();
  console.log(body);

  return new Response(
    JSON.stringify({
      message: "Wiadomość zostła wysłana. Dziękujemy!",
      success: true,
    }),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
        "Content-Type": "application/json",
      },
    },
  );
}
