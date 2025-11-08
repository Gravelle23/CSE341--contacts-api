const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

// Get all contacts
router.get('/', async (req, res) => {
  const db = getDb();
  const contacts = await db.collection('contacts').find().toArray();
  res.json(contacts);
});

// Get one contact by ID
router.get('/:id', async (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  const contact = await db.collection('contacts').findOne({ _id: id });
  res.json(contact);
});

module.exports = router;
