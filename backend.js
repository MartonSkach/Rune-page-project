'use strict'

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/api/champions_list',  (req, res) => {
  let sql = `SELECT * from champions`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      champions: rows,
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}) 

app.listen(PORT, () => {
  console.log(`Welcome on port:${PORT}, Summoner!`);
});