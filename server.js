/* eslint no-console: 0 */

let express = require('express');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const wdm = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

app.use(express.static('dist'));

const server = app.listen(PORT, 'localhost', err => {
    if (err) {
        console.error(err);
        return;
    }

console.log(`Listening at http://localhost:${PORT}`);});

process.on('SIGTERM', () => {
    console.log('Stopping dev server');
    wdm.close();
    server.close(() => {
        process.exit(0);
    });
});