var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, (req, res) => {
	res.send('this is my about ;)');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
	console.log('express server started on port ' + PORT);
});