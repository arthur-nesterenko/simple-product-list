const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const formidable = require( "formidable" );

const db = require( './db' );
const base64_encode = require( './utils/base64-encode' );

const values = require( 'lodash/values' );
const omit = require( 'lodash/omit' );


const port = 3001;
const app = express();
const router = express.Router();


app.use( bodyParser.urlencoded( { extended: true } ) );

app.use( bodyParser.json() );

app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    res.header( 'Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE' );
    next();
} );


router.route( '/products' )
    .get( function ( req, res ) {

        db.all( 'SELECT * FROM products', function ( err, rows ) {

            if (!err) res.json( { products: rows, success: true } );
            else res.json( { success: false, products: [] } );
        } );

    } )
    .post( function ( req, res ) {

        const fields = [];
        const form = new formidable.IncomingForm();
        form.maxFieldsSize = 2 * 1024 * 1024;

        form.on( 'field', function ( field, value ) {
            fields[ field ] = value;
        } );
        form.on( 'file', function ( name, file ) {
            fields[ name ] = base64_encode( file.path );

        } );

        form.on( 'end', function () {

            db.run( 'INSERT INTO products (title,price,sku,description,preview) VALUES( ?, ?, ?, ?, ? )', values( fields ),
                function ( err ) {
                    const id = parseInt( this.lastID );

                    if (id) res.json( { success: true } );
                    else res.json( { success: false } );

                } );

        } );

        form.parse( req );


    } );


router.route( '/products/:id' )
    .get( function ( req, res ) {

        const id = req.params.id;

        db.get( 'SELECT * FROM products WHERE id = ?', [ id ], function ( err, row ) {

            if (row) res.json( { product: row } );
            else res.json( { errors: 'Product not found' } );
        } );


    } )
    .put( function ( req, res ) {


        const fields = {};
        const form = new formidable.IncomingForm();

        form.maxFieldsSize = 2 * 1024 * 1024;

        form.on( 'field', function ( field, value ) {
            fields[ `$${field}` ] = value;

        } );
        form.on( 'file', function ( name, file ) {
            fields[ `$${name}` ] = base64_encode( file.path );

        } );

        form.on( 'end', function () {

            const hasPreview = '$preview' in fields;

            /**
             * TODO: should make it better
             */
            const sql = hasPreview 
              ? `title = $title,price = $price,sku = $sku,description = $description, preview = $preview`
              : `title = $title,price = $price,sku = $sku, description = $description` ;


            db.run( `UPDATE products SET 
             ${sql}
              WHERE id = $id`, fields,
                function ( err ) {

                    
                    if (!err) res.json( { success: true } );
                    else res.json( { success: false } );
                } );

        } );
        form.parse( req );


    } )
    .delete( function ( req, res ) {
        db.run( 'DELETE FROM products WHERE id = ?', [ req.params.id ], function () {
            res.json( { success: true } );
        } );
    } );



app.use( '/api', router );

app.listen( port, ( err ) => {
    if (err) console.error( err );
    console.info( '==> 💻  Open http://%s:%s in a browser to view the REST API.', 'localhost', port );

} );