
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    var n1 = Math.random() *15
    var n2 = Math.random() *15
    var n3 = Math.random() *15
    var n4 = Math.random() *15
    var pow = Math.pow(n1,2);
    var sgn = Math.sign(n2);
    var tnh = Math.tanh(n3);
    var trun = Math.trunc(n4);
    res.render('Bonus', { title: 'Mahendra Rayavarapu',
    n1:n1,
    n2:n2,
    n3:n3,
    n4:n4,
    pow:pow,
    sgn:sgn,
    tnh:tnh,
    trun:trun
});
});

module.exports = router;


