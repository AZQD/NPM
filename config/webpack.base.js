module.exports = {
  module: {
    rules: [
      {
        test:/\.js?$/,
        loader: "babel-loader",
        exclude: '/node_modules/'
      },
      {
        test:/\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: 'images/[name][hash:8].[ext]'
          }
        }]
      }
    ]
  }
}