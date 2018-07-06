'use strict'

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/api/champions_list', (req, res) => {
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

app.get('/api/runepages/:name', (req, res) => {
  let name = req.params.name;
  let sql = `SELECT * from runepages WHERE champ_name='${name}';`;

  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      rows,
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/runes/:name', (req, res) => {
    res.sendFile(__dirname + '/runepage.html');
});

app.get('/api/champ-rune', (req, res) => {
  let id = req.body.id;
  let sql = `SELECT * from champions WHERE champ_id = '${id}'`;
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

app.listen(PORT, () => {
  console.log(`Welcome on port:${PORT}, Summoner!`);
});