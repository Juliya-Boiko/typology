import Review from "@/app/models/review";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const reviews = await Review.find({});
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of Clients DB", { status: 500 });
  }
};