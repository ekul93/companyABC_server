const express = require('express');
const mysql = require('mysql2');
var cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, the server a work!');
});

// Configure the MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',         
    user: 'root',         
    password: 'secretpaSSw0rd', 
    database: 'companyABC', 
    port: 3306 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Define your routes and server logic here
app.listen(port, () => {
  console.log(`Server is running on port ${3306}`);
});

app.get('/fetchData', (req, res) => {
    db.query('SELECT * FROM carrierlist', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error fetching data from the database');
        return;
      }
      res.json(results);
    });
  });

 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3002, function () {
  console.log('CORS-enabled web server listening on port 3002')
})
  
