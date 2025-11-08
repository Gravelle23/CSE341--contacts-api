const express = require('express');
const { connectToServer } = require('./db/connect');
const contactsRouter = require('./routes/contacts');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/contacts', contactsRouter);

const port = process.env.PORT || 3000;

connectToServer().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
