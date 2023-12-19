import Review from "@/app/models/review";
import Product from "@/app/models/product";
import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const reviews = await Review.find({});
    const totalReviewsAmount = reviews.length;
    const totalRating = reviews.reduce((acc, item) => { return acc + item.rating }, 0);
    const averageRating = (totalRating / totalReviewsAmount).toFixed(1);
    const filtered = reviews.filter(item => item.rating === 5);
    const lastReview = filtered[filtered.length - 1];
    const totalFive = filtered.length;
    const product = await Product.find({ _id: lastReview.productId })

    return new NextResponse(JSON.stringify({ totalReviewsAmount, totalFive, lastReview, averageRating, product: product[0].name }), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of Clients DB", { status: 500 });
  }
};