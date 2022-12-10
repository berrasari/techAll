const mysql = require('mysql2');

// create a connection to the database
const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "x3hgZ3nUG5",
    password: "K15egM9Axx",
    database: "x3hgZ3nUG5",
});

module.exports = connection;