var express = require('express');
var router = express.Router();


var answer = [];

//ROUTES
router.get('/', function(req, res) {
    res.send(answer);
    answer = [];

});

router.post('/', function(req, res) {
    answer.push(req.body.xValue);
    answer.push(req.body.yValue);
    res.send(true);
});

module.exports = router;
