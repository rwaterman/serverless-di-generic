const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = (async() => {
  return {
    stats: 'minimal',
    target: 'node',
    entry: slsw.lib.entries,
    devtool: process.env.NODE_ENV === 'production' ? 'nosources-source-map' : 'eval-cheap-module-source-map',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader', // tsconfig.json must have `compilerOptions.sourceMap: true` or TSC won't generate source maps from TS files.
          exclude: /node_modules/, // We don't need to add source maps to minified files
        },
        /**
         * If not extracted and processed into the source map of the webpack bundle, browsers may misinterpret source map data.
         * source-map-loader allows webpack to maintain source map data continuity across libraries so ease of debugging is preserved.
         * source-map-loader will extract from any JavaScript file, including those in the node_modules directory.
         * Be mindful in setting include and exclude rule conditions to maximize bundling performance.
         * @see https://webpack.js.org/loaders/source-map-loader/
         */
        {
          use: ['source-map-loader'],
          test: /\.([jt])s$/,
          enforce: 'pre',
          exclude: [
            /node_modules\/(?!(SOME_COMMON_LIB_YOU_WANT_TO_INCLUDE|ANOTHER_ONE)\/).*/
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, '.webpack'),
      filename: '[name].js'
    },
    externals: [nodeExternals()],
  }
})();
