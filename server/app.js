// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var add = require('./routes/add');
var subtract = require('./routes/subtract');
var multi = require('./routes/multi');
var divide = require('./routes/divide');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multi', multi);
app.use('/divide', divide);


app.use('/', index);





app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
