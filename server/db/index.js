var sqlite3 = require('sqlite3')

var db_file = process.env.DB || ':memory:';
var db = new sqlite3.Database(db_file);
var db_ready = false;

var sql_create_table =
    'CREATE TABLE products ( ' +
    '  id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    '  title VARCHAR(255), ' +
    '  description VARCHAR(255), ' +
    '  sku VARCHAR(55), ' +
    '  price REAL, ' +
    '  preview BLOB, ' +
    '  created INTEGER, ' +
    '  updated INTEGER ' +
    
    '); ';

db.run(sql_create_table, function () {
    db_ready = true;
});



module.exports = db



