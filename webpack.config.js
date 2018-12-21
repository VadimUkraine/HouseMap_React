const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
			{
                test: /\.scss$/,  
                use: [
                	{
                		loader: 'style-loader',
                	},
                	{
                		loader: 'css-loader',
       //          		options: { 
       //          			modules: true,
							// localIdentName: '[local]___[hash:base64:5]'
                		// }
                	},
                	{
                		loader: 'sass-loader'
                	}                   
                ]
            },
            {
		        test: /\.(jpe?g|png|gif|svg)$/i,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
		              name: '[name].[ext]'
		            }
		          }
		        ]
		    },
		    {
                test: /\.css$/,
                use: [
                   'style-loader',
                   'css-loader'
                ]
			}
			
		]
	},
}