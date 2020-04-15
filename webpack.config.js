const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 2222,
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: 'postcss.config.js',
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				options: {
					name: './assets/[name].[ext]',
				},
			},
			{
				test: /\.ico$/,
				loader: 'file-loader',
				options: {
					name: './[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: './styles.css',
		}),
	],
};
