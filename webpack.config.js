var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/js');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
	module: {
		loaders:[
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = config;
