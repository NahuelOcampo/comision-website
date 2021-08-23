var express = require('express');
var router = express.Router();
var app = express();

/* GET contacto page. */
router.get('/', function (req, res, next) {
  res.render('../views/pages/contacto', { title: ' Contacto' });
});

module.exports = router;
