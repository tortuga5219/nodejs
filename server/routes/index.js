var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index.cont");
  res.render('board_login', { title: 'Express' });
});

// router.post('/', function(req, res, next){
//   res.render('/test')
// });


module.exports = router;
