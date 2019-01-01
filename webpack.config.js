const path = require('path');
const ZipPlugin = require('zip-webpack-plugin')
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: {
    app: ["./lambda.js"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },
  //externals: [nodeExternals()],

  plugins: [
    new ZipPlugin({
      fileOptions: {
        mtime: new Date(),
        compress: true
      }
    })
  ]
};