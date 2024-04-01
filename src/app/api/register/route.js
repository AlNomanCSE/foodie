import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hasPassword = await bcrypt.hash(password, 7);
    await connectMongoDB();
    await User.create({ name, email, password: hasPassword });
    return NextResponse.json({ message: "User Registerd" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while registering user" },
      { status: 500 }
    );
  }
}
