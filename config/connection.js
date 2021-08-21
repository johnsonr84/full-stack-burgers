// Set up MySQL connection
const mysql = require("mysql");
require('dotenv').config(); 

let connection;

//Check if JASWDB for database to use
if (process.env.JAWSDB_URL) {
  //use jaws_db
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //use local connection
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
  });
}; 

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for ORM to use
module.exports = connection;