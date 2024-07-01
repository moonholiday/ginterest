import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        const existingEmail = await db.user.findUnique({
            where: { email: email }
        });

        if (existingEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists" }, { status: 409 })
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 })

    } catch (error) {

    }
} 
