
const express = require('express')
const mysql = require('mysql');
const dotenv = require('dotenv').config()

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});
 
connection.connect();

app.get('/', function (req, res) {
  res.send('hi');
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})