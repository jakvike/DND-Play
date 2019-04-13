const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		vendor: './src/vendor.ts',
		polyfills: './src/polyfills.ts',
		main: './src/main.ts'
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					"css-loader"
				]
			},
			{
				test: /\.ts$/,
				loaders: [
					'babel-loader',
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: './tsconfig.json'
						}
					},
					'angular2-template-loader',
					'angular-router-loader'
				]
			},
			{
				test: /\.ts$/,
				enforce: "pre",
				loader: 'tslint-loader'
			},
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},
				exclude: [/node_modules/],
				test: /\.js$/
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					'to-string-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	output: {
		chunkFilename: '[name].[hash].js',
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.ContextReplacementPlugin(
			/\@angular(\\|\/)core(\\|\/)fesm5/,
			path.resolve(__dirname, 'src'), {}
		),
		new FilterWarningsPlugin({
			exclude: /System.import/
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new UglifyJSPlugin({
			uglifyOptions: {
			  compress: true 
			}
		  })
	],
	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
};
