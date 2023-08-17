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
        "Access-Control-Allow-Origin": origin || "*" || "http://127.0.0.1:5500",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    },
  );
}
