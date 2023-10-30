import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token');

  const res = await fetch("https://jsonplaceholder.typicode.com");
  if (!res.ok) throw new Error('failed to fetch data : "/app"');

  const data = await res.json();
  return NextResponse.json({ data });
}
