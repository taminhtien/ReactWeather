var webpack = require('webpack'); // Webpack utils

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', // Those are script files so we will let script loader to load, no need webpack to handle it
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: { // Set of key-value pair, key is module name and value is a variable we want to available when loading script files in entry
    jquery: 'jQuery' 
  },
  // Create a new provide plugin, will give us shortcuts to use in component files, for example '$' variable
  plugins: [ // Set of key-value pair, key is variable, value is module name
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)|(bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
