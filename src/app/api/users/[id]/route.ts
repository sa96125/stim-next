import { env } from "process";
import { NextResponse } from "next/server";
import { limiter } from "../../config/limiter";

const BASE_URL: string = env.API_END_POINT as string;

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  const origin = request.headers.get("origin");

  const remaining = await limiter.removeTokens(1);

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }

  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error('failed to fetch data : "/app"');
  }

  const exist = await res.json();

  return !exist.id
    ? NextResponse.json({ message: "User not found" })
    : NextResponse.json({ exist });
}
