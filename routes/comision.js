var express = require('express');
var router = express.Router();
var app = express();

/* GET comision page. */
router.get('/', function (req, res, next) {
  res.render('../views/pages/comision', { title: 'Comisión' });
});

module.exports = router;
