const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let db;

async function connectToServer() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  db = client.db('contacts'); // Use your project name
  console.log('✅ Connected to MongoDB Cluster1 (contacts database)');
}

function getDb() {
  if (!db) throw new Error('Database not connected');
  return db;
}

module.exports = { connectToServer, getDb };
