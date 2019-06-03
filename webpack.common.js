const path = require ('path');
const HTmlWebpackPlugin = require ('html-webpack-Plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');


module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'index.js'
    },
    plugins : [
        new HTmlWebpackPlugin({
            title : '俄罗斯方块。',
        }),
        new CleanWebpackPlugin(),
    ],
    module :{
        rules : [
            {
                test: /\.css$/,
                use :[
                    'style-loader',
                    'css-loader'
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