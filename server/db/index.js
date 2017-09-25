var sqlite3 = require( 'sqlite3' ).verbose();
var path = require( 'path' );
var db_file = path.resolve( __dirname, './products.db' );
var db = new sqlite3.Database( db_file );


var sql_create_table = `CREATE TABLE IF NOT EXISTS   products ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255), 
     description VARCHAR(255),
     sku VARCHAR(55),
     price REAL,
     preview VARCHAR(255)
)`;


db.run( sql_create_table )



module.exports = db;



