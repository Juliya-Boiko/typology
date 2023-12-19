import Product from "@/app/models/product";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const id = params.id;
  try {
    await connectDB();
    const product = await Product.find({ _id: id });
    return new NextResponse(JSON.stringify(product[0]), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of Product", { status: 500 });
  }
};