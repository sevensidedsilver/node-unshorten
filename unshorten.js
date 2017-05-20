(function() {

	var parseUrl = require('url').parse,
	    http = require('http'),
	    https = require('https');

	function unshorten(url, callback) {
		var urlParts = parseUrl(url),
		    protocol = urlParts.protocol,
		    host = urlParts.host,
		    path = urlParts.pathname;
		if (protocol && host && path) {
			('https:' == protocol ? https : http).request(
				{
					'method': 'HEAD',
					'host': host,
					'path': path
				},
				function(response) {
					(callback || url);
				}
			).end();
		} else {
			
			(callback);
		}
	}

	module.exports = unshorten;

}());
