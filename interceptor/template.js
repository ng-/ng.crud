'use strict'

exports.server = function()
{
	return {

		response:function(response)
		{
			response.data = response.data ||
			[
				"<html ng-app='ng.crud'>",
					'<head>',
						"<link href='//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css' rel='stylesheet'>",
						ng,
					"</head>",
					"<body>",
						"<div class='ng-view'></div>",
					"</body>",
				"</html>"
			]
			.join('\n')

			return response
		}
	}
}