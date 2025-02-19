import { MongoClient, ServerApiVersion } from "mongodb";

const URI = "mongodb://mongo:27017/codex";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectToServer = async () => {
  try {
    await client.connect();
    db = client.db("admin");
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);  // Exit the app if the connection fails
  }
};

const getDb = () => {
  if (!db) throw new Error("Database not connected");
  return db;
};

// ✅ Export as named exports
export { connectToServer, getDb };
