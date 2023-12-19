import { connectDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Client from "@/app/models/client";

export const POST = async (req) => {
  const { firstName, lastName, email, password } = await req.json();

  try {
    await connectDB();
    // CHECK IF CLIENT ALREADY EXIST
    const client = await Client.findOne({ email });
    if (client) {
      return new NextResponse(JSON.stringify(`Email ${email} in use`), { status: 409 });
    };

    //CREATE NEW CLIENT
    const hashPassword = await bcrypt.hash(password, 10);
    await Client.create({ firstName, lastName, email, password: hashPassword });

    // CHECK IF CLIENT CREATED
    const checkClient = await Client.findOne({ email });
    if (!checkClient) {
      return new NextResponse(JSON.stringify("User didnt exist. Repeat registration"), { status: 401 });
    };

    return new NextResponse(JSON.stringify({ firstName: checkClient.firstName, lastName: checkClient.lastName, id: checkClient._id }), { status: 201 });
  } catch (error) {
    return new NextResponse("Error in response of Clients DB", { status: 500 });
  }
};