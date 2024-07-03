import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { formSchema } from "@/lib/validationSchema";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = formSchema.parse(body);

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

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
} 
