var express = require('express');
var router = express.Router();
var personal = require('../utils/personal');

/* GET home page. */
router.get('/', function (req, res, next) {
  personal.getAllComision((error, data) => {
    if (error) {
      return res.send({
        error,
      });
    }
    const JSONBody = JSON.parse(data);
    res.render('index', { title: 'Comision de homenaje Gada 101', JSONBody });
  });
});

module.exports = router;
