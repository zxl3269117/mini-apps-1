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
  // save
  save: (data, callback) => {
    var keys = Object.keys(data);
    var cols = keys.slice(1);
    var setsArr = cols.map((colName) => {
      return `${colName}="${data[colName]}"`;
    });
    var sets = setsArr.join(',');
    console.log(sets);
    var queryStr = `UPDATE records SET ${sets} WHERE id=${data.id}`;
    connection.query(queryStr, callback);
  },

  // create
  create: (id, callback) => {
    var queryStr = `INSERT INTO records SET id=${id}`;
    connection.query(queryStr, callback);
  },

  // count record in buyers
  count: (table, callback) => {

  }
}


module.exports = Models;