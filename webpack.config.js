var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/index.js',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'index.js' },
  devtool: 'inline-source-map',
  devServer: {
	contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
           'file-loader'
         ]
      },
	{
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
    ]
  },
};
