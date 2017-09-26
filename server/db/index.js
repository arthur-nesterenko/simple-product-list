const sqlite3 = require( 'sqlite3' ).verbose();
const path = require( 'path' );
const db_file = path.resolve( __dirname, './products.db' );
const db = new sqlite3.Database( db_file );


const sql_create_table = `CREATE TABLE IF NOT EXISTS   products ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255), 
     description VARCHAR(255),
     sku VARCHAR(55),
     price REAL,
     preview VARCHAR(255)
)`;


db.run( sql_create_table )



module.exports = db;



