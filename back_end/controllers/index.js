var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

router.use( '/api/portfolio', require( './portfolio' ) );

module.exports = router;