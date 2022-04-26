// Import mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME
    },
    console.log(`Connected to the company_db database.`)
  );
  
module.exports = db;