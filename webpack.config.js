const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                loader: ["raw-loader", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        historyApiFallback: true
    }
}