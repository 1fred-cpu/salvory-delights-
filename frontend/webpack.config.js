const path = require("path");
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"] // Add postcss-loader here
            },            {
                test: /\.(js|jsx)$/, // Match both `.js` and `.jsx` files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            
        ]
    },
    devServer: {
        static: "./dist",
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
    },
    devtool: "source-map", // For easier debugging
    mode: "development" // Or 'production' for the final build
};

