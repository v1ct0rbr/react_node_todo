const express = require('express');

/* importar o módulo do consign */
const consign = require('consign');

/* importar o módulo do body-parser */
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const db = require('dbConnection').Database;
const port = process.env.PORT || 5000;
app.use(express.static('./app/public'));
app.use(cors());
/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


consign().include('app/dao').then('app/controllers').then('app/routes').then('config/dbConnection.js').into(app);


/* exportar o objeto app */
module.exports = { app: app }