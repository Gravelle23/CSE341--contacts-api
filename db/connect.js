const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let db;

async function connectToServer() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db('contacts');
  console.log('Connected to MongoDB');
}

function getDb() {
  return db;
}

module.exports = { connectToServer, getDb };
