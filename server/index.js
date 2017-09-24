var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var  db =  require('./db')

var port = 3001;
var app = express();
var router = express.Router();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


router.route('/products')
.get(function(req,res){

    db.all('SELECT * FROM products', function (err, rows) {
        res.json( { products: rows });
    });

})
.post(function(req,res){
    var now = new Date().getTime() / 1000 >> 0;
    var params = [ req.body.title, req.body.price,req.body.sku, now, now ];

    db.run('INSERT INTO products (title,description,sku) VALUES(?,?,?,?)', params, function (err) {
        var id = parseInt(this.lastID);

        if (id) res.json({success:true})
        else  res.json({success:false})
    });
})



router.route('/products/:id')
.get(function(req,res){

    var id = req.params.id;

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
    var id = req.body.id;
    var preview = req.body.preview;


    db.run('UPDATE products SET title = ?, description = ?, sku = ?, price = ?, WHERE id = ?', [
         title,
         description,
         sku,
         price,
         id
        ], function () {
        res.json({success:true});
    });

})
.delete(function(req,res){
    db.run('DELETE FROM products WHERE id = ?', [ req.body.id ], function () {
        res.json({success:true});
    });
})








app.use('/api', router);

app.listen(port, (err) => {
    
        if (err)  console.error(err);
        
    
        console.info('==> 💻  Open http://%s:%s in a browser to view the api.', 'localhost', port);
    
    });