import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Client from "@/app/models/client";

export const POST = async (req) => {
  const { email, password } = await req.json();

  try {
    await connectDB();

    // CHECK IF CLIENT  EXIST
    const client = await Client.findOne({ email });
    if (!client) {
      return new NextResponse(JSON.stringify("Email or password is wrong"), { status: 401 });
    };

    // CHECK PASSWORD
    const passCompare =  bcrypt.compareSync(password, client.password);
    if (!passCompare) {
      return new NextResponse(JSON.stringify("Password is wrong"), { status: 401 });
    };

    return new NextResponse(JSON.stringify({ firstName: client.firstName, lastName: client.lastName, id: client._id }), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in response of Clients DB", { status: 500 });
  }
};