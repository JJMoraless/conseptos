import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config.js";

const atlasUri = process.env.ATLAS_URI;
const dbName = process.env.ATLAS_DB_NAME;

const client = new MongoClient(atlasUri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log(`👽 🦣 🦕 connected to database ${db.databaseName}`);
    return db;
  } catch (error) {
    console.log(`🦀🦀🦀 error  =   ${error}`);
  }
};

// devuelve la conexion a mongodb
export const db = await connectToDatabase();
const transactions = db.collection("transactions");


client.startSession()


// console.log(agregation);
