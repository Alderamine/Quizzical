const path = require('path');

module.exports = {
    entry: "./src/index.js",
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".tsx", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                },]
            }
        ]
    }
}