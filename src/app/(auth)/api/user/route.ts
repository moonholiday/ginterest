import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        return NextResponse.json(body)
    } catch (error) {
    }
} 
