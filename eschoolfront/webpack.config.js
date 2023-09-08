"devServer": {
    "historyApiFallback": true,
    "proxy": {
      "/api": {
        "target" : "http://localhost:9090",
        "secure": false
      }
    }
  }