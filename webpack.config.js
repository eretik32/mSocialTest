const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	// базовый путь к проекту
	context: path.resolve(__dirname, 'src'),

	// точки входа JS
	entry: {
		// основной файл приложения
		app: [
			'./js/app.js',
			'./scss/style.scss'
		]
	},

	//путь для собранных файлов
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '../'
	},
	//конфигурация devServer
	devServer: {
		contentBase: './app'
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {sourceMap: true}
						},
						{
							loader: 'sass-loader',
							options: {sourceMap: true}
						},
					],
					fallback: 'style-loader',
				})
			},
		],
	},

	plugins: [
		new ExtractTextPlugin('./css/[name].css')
	]
};