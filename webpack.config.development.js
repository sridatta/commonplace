var webpack = require('webpack');

var config = {
    watch: true,
    entry: [
        'webpack-hot-middleware/client?reload=true&path=http://localhost:3000/__webpack_hmr',
        './src/index',
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.png|\.svg$/,
                loaders: ['file-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap'
            },
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:3000/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};


module.exports = config;
