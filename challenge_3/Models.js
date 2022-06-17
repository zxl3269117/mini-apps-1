const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'transactions'
});

connection.connect((err) => {
  if(err) {
    throw err;
  }

  console.log('connected as id', connection.threadId);
});

var Models = {
  // count record in buyers
  count: (callback) => {
    var queryStr = 'SELECT COUNT(id) FROM records';
    connection.query(queryStr, callback);
  },

  // create
  create: (id, callback) => {
    var queryStr = `INSERT INTO records SET id=${id}`;
    connection.query(queryStr, callback);
  },

  // save
  save: (data, callback) => {
    var keys = Object.keys(data);
    var cols = keys.slice(1);
    var setsArr = cols.map((colName) => {
      return `${colName}="${data[colName]}"`;
    });
    var sets = setsArr.join(',');
    var queryStr = `UPDATE records SET ${sets} WHERE id="${data.id}"`;
    connection.query(queryStr, callback);
  },

  // fetch
  fetch: (id, callback) => {
    var queryStr = `SELECT * FROM records WHERE id="${id}"`;
    connection.query(queryStr, callback);
  }
}


module.exports = Models;