module.exports = async () => ([{
	plugins: {
		'@rob.hameetman': (await import('./bin/plugin.min.js')).default,
	},
}]);
