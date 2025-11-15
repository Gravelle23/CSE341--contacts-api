const express = require('express');
const { connectToServer } = require('./db/connect');
const contactsRouter = require('./routes/contacts');

// Swagger (simple)
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// SIMPLE Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'Simple Contacts API Documentation'
    }
  },
  apis: ['./routes/*.js'], // Swagger will scan your routes folder
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Mount Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Contacts routes
app.use('/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send('Contacts API is running. Visit /api-docs for documentation.');
});

connectToServer()
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
