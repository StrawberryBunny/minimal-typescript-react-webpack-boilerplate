var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/dev-server',
        './src/index'
    ],
    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ],

        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {   
                test: /\.tsx?$/,
                exclude: /node_modules/, 
                loader: "ts-loader" 
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modulesDirectories: ['node_modules']
    },

    devServer: {
        port: 8090
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
};