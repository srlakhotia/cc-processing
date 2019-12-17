const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const API_PORT = 3001;
const app = express();
const api = require('./api');
const dataStore = require('data-store')({path: process.cwd() + '/cards.json'});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(api);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

process.on('SIGINT', () => {
  dataStore.clear();
  process.exit();
});