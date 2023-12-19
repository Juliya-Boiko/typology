import Review from "@/app/models/review";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    await connectDB();
    const review = await Review.find({ productId: id });
    return new NextResponse(JSON.stringify(review[0]), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of Reviews DB", { status: 500 });
  }
};
// 6526726be0f5b78b513115d7