import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import Diagnostic from "@/app/models/diagnostic";

export const POST = async (req) => {
  const values = await req.json();

  try {
    await connectDB();
    await Diagnostic.create(values);
    return new NextResponse(JSON.stringify({ message: 'Success' }), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in response of Subscribers DB", { status: 500 });
  }
};