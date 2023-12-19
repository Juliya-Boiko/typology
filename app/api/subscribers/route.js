import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import Subscriber from "@/app/models/subscriber";

export const POST = async (req) => {
  const { email } = await req.json();

  try {
    await connectDB();
    const checkSuscribe = await Subscriber.findOne({ email });
    if (checkSuscribe) {
      return new NextResponse(JSON.stringify({ message: 'Already subscribed' }), { status: 401 });
    }
    await Subscriber.create({ email });
    return new NextResponse(JSON.stringify({ message: 'Success' }), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in response of Subscribers DB", { status: 500 });
  }
};