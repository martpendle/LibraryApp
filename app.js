var express = require('express');

var test = console.log('testing github works from webstorm')

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views','./src/views');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});