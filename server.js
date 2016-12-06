var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuth: (req, res, next) => {
		console.log('private route hit');
		next();
	},
	logger: (req, res, next) => {
		var date = new Date().toString();
		console.log('request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

app.get('/about', middleware.requireAuth, (req, res) => {
	res.send('this is my about ;)');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
	console.log('express server started on port ' + PORT);
});