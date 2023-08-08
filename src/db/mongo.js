import { MongoClient } from "mongodb";
import "dotenv/config.js";

const atlasUri = process.env.ATLAS_URI;
const dbName = process.env.ATLAS_DB_NAME;

const client = new MongoClient(atlasUri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log(`👽 🦣 🦕connected to database ${db.databaseName}`);
    return db;
  } catch (error) {
    console.log(`🦀🦀🦀 error  =   ${error}`);
  }
};

// devuelve la conexion a mongodb
export const db = await connectToDatabase();

// colecciones de de la db selecionada
const collections = await db.collections();
collections.forEach((c) => console.log(c.collectionName));

//creamos o seleccionamos una collection con la db seleccionada que a su vez esta dentro de un cluster
const cars = db.collection("cars");

// devulve un cursor con el que podemos iteractuara para hacer busquedas en la collection

// await cars.updateMany({ name: "pepe"}, {$set: {name: "tesla"}});


const searchCursor = await cars.findOne({name: "tesla"});
// const res = await searchCursor.toArray();
console.log(searchCursor);



// const cursorInsert = await cars.insertMany([
//   {
//     name: "tractor-x",
//     model: "xx",
//   },
//   {
//     name: "bicicleta-x",
//     model: "ss",
//   },
// ]);

// console.log(cursorInsert.insertedIds);

// while (await searchCursor.hasNext()) {
//   console.log(await searchCursor.next());
// }
