// Loads app server using express.
const express = require("express");
const mysql = require("mysql");
require("dotenv").config();



const pool = mysql.createPool({
  connectionLimit: 10,
  host: "",
  user: "admin",
  password: "password",
  database: "",
});

let DB = {};

// Wrapper for sending SQL queries to sql server
function myQueryer(stringQuery) {
  return new Promise((resolve, reject) => {
    pool.query(stringQuery, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}


// All Queries will be created below as callable functions

/* 
All GET queries
*/

/* 
CREATION
*/

/* 
UPDATION
*/

/* 
Deletion
*/

module.exports = DB;
