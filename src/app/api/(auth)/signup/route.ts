import UserDTO from "@/dto/user-dto.dto";
import generateToken from "@/helper/generateToken";
import { hashPassword } from "@/helper/passwordHashing";
import prisma from "@/lib/prisma";
import SignupSchema from "@/schema/signup-schema.schema";
import { APIResponse } from "@/types/response-types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles user registration.
 *
 * Flow:
 * 1. Validate request body using Zod schema
 * 2. Check if email already exists
 * 3. Hash password securely
 * 4. Create user in database
 * 5. Generate JWT token
 * 6. Store token in HTTP-only cookie
 *
 * @param req - Incoming Next.js request
 * @returns JSON response with account creation status
 */

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const cookieStore = await cookies()
    const body = SignupSchema.safeParse(await req.json())

    if (body.error) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 400,
        error: body.error.issues[0].message
      }, { status: 400 })
    }

    const { name, email, password } = body.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (existingUser) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 409,
        error: "Email already in use"
      }, { status: 409 })
    }

    const hashedPassword = await hashPassword(password)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })
    if (!newUser) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: "An error occurred while creating account"
      }, { status: 500 })
    }

    const token = await generateToken(newUser)

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    const userDTO = new UserDTO(newUser)

    return NextResponse.json<APIResponse>({
      success: true,
      status: 201,
      message: "Account created successfully",
      data: {
        user: userDTO,
        token
      }
    }, { status: 201 })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: `Internal Server Error: ${error.message}`
      }, { status: 500 })
    } else {
      return NextResponse.json<APIResponse>({
        success: false,
        status: 500,
        error: `An unknown error occurred: ${error}`
      }, { status: 500 })
    }
  }
}