const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Informar ao node que as requisições serão em formato json
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);