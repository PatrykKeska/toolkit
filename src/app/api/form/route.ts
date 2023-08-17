import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "OPTIONS") {
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  }

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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    },
  );
}
