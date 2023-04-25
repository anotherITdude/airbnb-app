import bcrypt from "bcrypt";
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //get body from request
  const body = await request.json();

  //destructure name email password from the request
  const { email, name, password } = body;

  //hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
