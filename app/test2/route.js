import User from "../(models)/dbs.js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const body = await req.json();

  const { username, password } = body;

  const user = await User.findOne({ username });

  if (!user) {
    // User not found
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    // Passwords don't match
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Passwords match, return the user
  return NextResponse.json({
    success: true,
    message: "Logged in successfully",
    user,
  });
};
