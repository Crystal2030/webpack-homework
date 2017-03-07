# webpack-homework
#  npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 css-loader style-loader extract-text-webpack-plugin open-browser-webpack-plugin react react-dom --save-dev
#  npm run dev


##在webpack中加载css less
    - npm install style-loader css-loader --save-dev
    - npm install less less-loader --save-dev
## 自动打开浏览器       
    - npm install open-browser-webpack-plugin --save-dev
    - 修改webpack.config.js：
          ```
          var htmlWebpackPlugin = require('html-webpack-plugin');
          
          ...
          
           plugins: [
                  new openBrowserPlugin({
                      url: 'http://localhost:8181/'
                  })
               ]
           ```
## 在生产环境下压缩产出文件       
     - cp webpack.config.js webpack.config.prod.js
     - 修改webpack.config.prod.js：
               ```
                var uglifyPlugin = webpack.optimize.UglifyJsPlugin;   
               ...
               
                plugins: [
                       new uglifyPlugin({
                           compress: false
                       })
                    ]
                ```
     -  webpack --config webpack.config.prod.js
       
## 将css单独加载
    - npm install extract-text-webpack-plugin --save-dev
## 文件名增加hash值
     
