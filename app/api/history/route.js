// app/api/history/route.js
import { MongoClient } from 'mongodb'

export async function GET(request) {
  const client = new MongoClient(process.env.MONGODB_URI)
  
  try {
    await client.connect() // Connect to MongoDB
    const db = client.db("WellText") // Replace with your actual database name
    const collection = db.collection("contents") // Replace with your actual collection name

    // Extract 'createdBy' from query parameters
    const url = new URL(request.url)
    const createdBy = url.searchParams.get("createdBy")

    // Check if 'createdBy' is provided
    const query = createdBy ? { createdBy } : {}

    // Fetch documents with the filter if 'createdBy' is specified
    const data = await collection.find(query).toArray()

    return new Response(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.error("Error fetching data:", error)
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    })
  } finally {
    await client.close() // Close MongoDB connection after query
  }
}
