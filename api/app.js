
const express = require('express')
const { Sequelize } = require('sequelize')
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const usersController = require('./controllers').users;

const app = express()
const port = 3000
app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`)

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'My boilderplate API',
  version: 0.1
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})