import Product from "@/app/components/services/models/product";
import { connectDB } from "@/app/components/services/utils/mongo";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url);
  const tag = url.searchParams.get("tag");
  const limit = url.searchParams.get("limit");
  // const page = url.searchParams.get("page");
  // const skip = +page * limit;

  try {
   // return new NextResponse(JSON.stringify({ tag, limit }), { status: 200 });
    await connectDB();
    const products = await Product.find({}).limit(limit);
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of Clients DB", { status: 500 });
  }
};