var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/board_list', function(req, res, next) {
  console.log("list.cont");
  res.render('board_list', { title: 'Express' });
});

module.exports = router;
