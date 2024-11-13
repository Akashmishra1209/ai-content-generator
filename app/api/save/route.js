import { MongoClient } from "mongodb";

export async function POST(req) {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();

        const db = client.db("WellText");
        const collection = db.collection("contents");

        // Parse JSON data from the request body
        const { formData, aiOutput, createdBy } = await req.json();

        // Insert the data into MongoDB
        const result = await collection.insertOne({
            formData: {
                title: formData.title,
                outline: formData.outline,
            },
            aiOutput: aiOutput,
            createdBy: createdBy,
            createdAt: new Date() // Timestamp for record creation
        });

        client.close();

        return new Response(JSON.stringify({ message: "Data inserted successfully", result }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to insert data", message: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
