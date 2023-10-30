import { env } from "process";
import { NextResponse } from "next/server";

const API_KEY: string = env.API_KEY as string;
const BASE_URL: string = env.API_END_POINT as string;

export async function GET() {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error('failed to fetch data : "/app"');

  const exist = await res.json();

  return NextResponse.json({ exist });
}

export async function POST(request: Request) {
  const { id, name }: Partial<User> = await request.json();

  if (!id || !name) {
    NextResponse.json({ message: "Missing required data" });
  }

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      id,
      name,
    }),
  });

  if (!res.ok) throw new Error('failed to fetch data : "/app"');

  const updated = await res.json();
  return NextResponse.json({ updated });
}

export async function DELETE(request: Request) {
  const { id }: Partial<User> = await request.json();

  if (!id) return NextResponse.json({ message: "Id required" });

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  if (!res.ok) throw new Error('failed to fetch data : "/app"');

  const deleted = await res.json();

  return NextResponse.json({ deleted });
}

export async function PUT(request: Request) {
  const { id, name }: User = await request.json();

  if (!id || !name) {
    NextResponse.json({ message: "Missing required data" });
  }

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      id,
      name,
    }),
  });

  if (!res.ok) throw new Error('failed to fetch data : "/app"');

  const updated = await res.json();

  return NextResponse.json({ updated });
}
