module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		'@babel/plugin-syntax-top-level-await',
		'babel-plugin-transform-import-meta'
	]
};
