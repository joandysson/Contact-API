require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { PORT  = '3333' } = process.env;
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes);

app.listen(PORT, () => console.log(`API running on port ${PORT}`));