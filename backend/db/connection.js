import { MongoClient, ServerApiVersion } from "mongodb";

const NOM_DATABASE = process.env.NOM_DATABASE;
const MONGO_HOST =  process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${NOM_DATABASE}`;

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
    db = client.db(NOM_DATABASE);
    console.log("✅ Successfully connected to MongoDB", URI);
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
