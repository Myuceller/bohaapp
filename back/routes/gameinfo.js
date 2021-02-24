var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("backend router get /gameinfo here");
});


module.exports = router;
