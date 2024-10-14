const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// iniciar Servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});