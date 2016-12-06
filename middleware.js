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

module.exports = middleware;