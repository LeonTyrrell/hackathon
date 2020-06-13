const port = 3000

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(port);
console.log(`app listen on port ${port}`);
