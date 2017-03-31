var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template:__dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports={
  //might be '/expressApp/xentryindex.js'
  //or '/app/index.js'
  //or '/expressApp/index.js'
  entry:__dirname +'/app/index.js',
  module:{
    loaders:[
    {
      test:/\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
    ]
  },
  output:{
    filename:'transformed.js',
    path:__dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};