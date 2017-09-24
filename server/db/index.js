var sqlite3 = require('sqlite3')
var path = require('path');
var db_file = process.env.DB || ':memory:';
var db = new sqlite3.Database(db_file);
var db_ready = false;



var sql_create_table = `CREATE TABLE  products ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255), 
     description VARCHAR(255),
     sku VARCHAR(55),
     price REAL,
     preview VARCHAR(255)
)`;


db.serialize(function () {
    db.run(sql_create_table)

    var fs = require('fs');

    var productPath = path.resolve(__dirname,'./initial-products.json');

    var initialProducts =JSON.parse(fs.readFileSync( productPath)).products;


    initialProducts.forEach(function(product){

        db.run("INSERT OR IGNORE INTO products (title, description, sku,price,preview) VALUES (?,?,?,?,?)", 
        [
             product["title"],
             product["description"],
             product["sku"],
             product["price"],
             product["preview"]
        
        ]);
    })

    // db_ready = true;
});





module.exports = db



