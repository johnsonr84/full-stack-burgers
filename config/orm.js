// Import MySQL connection.
const connection = require('./connection.js');


function createQmarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString(); 
  }
  
  function translateSql(obj) {
    let arr = [];
    for (let key in obj) {
      value = obj[key];
      if (Object.hasOwnProperty.call(obj, key)) {
        // if string with spaces, add quotations 
        if (typeof value === "string" && value.indexOf(" " >= 0)) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value)
      }
    }
    return arr.toString();
  }

const orm = {
    //select all from the table
    selectAll: (table, cb) => {
      let queryStr = "SELECT * FROM " + table + ";";
  
      connection.query(queryStr, (err, result) => {
        if (err) throw err; 
        cb(result)
      })
    },
  
    //insert method
    insertOne: (table, cols, vals, cb) => {
      let queryStr = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
      
      connection.query(queryStr, vals, (err, result) => {
        if (err) throw err;
        cb(result)
      });
    }, 
  
    //update method 
    updateOne: (table, objColVals, condition, cb) => {
      let queryStr = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition; 
  
      connection.query(queryStr, (err, result) => {
        if (err) throw err;
        cb(result)
      })
    },
  
  }

// Export the orm object for the model (burgers.js).
module.exports = orm;