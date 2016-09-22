var config = {
   entry: './src/main.js',
	
   output: {
      path:'./public',
      filename: 'index.js'
   },
	
   devServer: {
      inline: true,
      port: 8084,
      contentBase: './public'
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;