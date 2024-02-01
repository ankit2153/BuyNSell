import User from "../(models)/dbs.js";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export const GET = () => {
  return NextResponse.json({ message: "hello world" });
};

export const POST = async (req) => {
  const body = await req.json();

  const { username, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  try {
    await user.save();
    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
};
