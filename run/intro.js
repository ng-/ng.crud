exports.server = function()
{
	var log = require('../../ng.seed/node_modules/ng/logger')
	  , pkg = require('../../../package.json')

	log.green.bold('Starting ng.crud module. Navigate your browser to localhost:'+Object.keys(pkg.ports)[0])
	log.green('ng.crud is an example module to demonstrate ng.seed\'s basic concepts')
	log.green('Simply delete the ng.crud folder once it is no longer helpful as a reference')
}