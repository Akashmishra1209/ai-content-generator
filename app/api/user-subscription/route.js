import { NextResponse } from 'next/server';
import { MongoClient } from "mongodb";

export async function POST(request) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("WellText");
    const collection = db.collection("userSubscriptions");

    // Parse JSON data from the request body
    const { email, username, active, paymentId } = await request.json();

    // Insert the data into MongoDB
    const result = await collection.insertOne({
      email,
      username,
      active,
      join_date: new Date().toLocaleDateString("en-IN") // Timestamp for subscription creation
    });

    await client.close();

    return NextResponse.json(
      { message: "User subscription added successfully", result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add user subscription", message: (error).message },
      { status: 500 }
    );
  }
}