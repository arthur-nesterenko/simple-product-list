var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var  db =  require('./db')


var app = express();
var router = express.Router();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.route('/products')
.get(function(req,res){

    db.all('SELECT * FROM products', function (err, rows) {
        res.json( { products: rows });
    });

})
.post(function(req,res){
    var now = new Date().getTime() / 1000 >> 0;
    var params = [ req.body.title, req.body.price,req.body.sku, now, now ];

    db.run('INSERT INTO products (title,description,sku,created,updated) VALUES(?,?,?,?)', params, function (err) {
        var id = parseInt(this.lastID);

        if (id) res.json({success:true})
        else  res.json({success:false})
    });
})



router.route('/products/:id')
.get(function(req,res){

    db.get('SELECT * FROM products WHERE id = ?', [ id ], function (err, row) {
    
        if (row) res.json({product:row});
        else res.json({errors: 'Product not found'})
    });

 
    
})
.put(function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var sku = req.body.sku;
    var price = req.body.price;
    var preview = req.body.preview;
    var now = new Date().getTime() / 1000 >> 0;

    db.run('UPDATE products SET title = ?, description = ?, sku = ?, price = ?, updated = ? WHERE id = ?', [ title, description,sku,price, now, req.user.id ], function () {
        res.json({success:true});
    });

})
.delete(function(req,res){
    db.run('DELETE FROM products WHERE id = ?', [ req.product.id ], function () {
        res.json({success:true});
    });
})


var db_file =  ':memory:';
var db = new sqlite3.Database(db_file);
var db_ready = false;

var sql_create_table =
    'CREATE TABLE users ( ' +
    '  id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    '  name VARCHAR(255), ' +
    '  email VARCHAR(255), ' +
    '  created INTEGER, ' +
    '  updated INTEGER ' +
    '); ';

db.run(sql_create_table, function () {
    db_ready = true;
});


app.use('/api', router);
app.listen(3000);