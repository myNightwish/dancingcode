const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './examples/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js' // filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      // webpack 中用于配置代码分割的一种方式，它允许你根据一定的规则将模块分割成不同的块，并控制这些块的打包方式。
      cacheGroups: {
        vendor: {
          // 配置将哪些第三方模块打包到单独的vendor.[contenthash].js 文件
          // 一般，vendor 包含了项目中所使用的第三方库和框架，如 Vue、React、lodash 等
          // 好处：第三方库往往不会频繁变动，将它们单独打包可以利用浏览器缓存，
          // 减小每次更新时的文件大小，提高页面加载速度。
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          // 表示这个块的优先级比其他块高，因此会被优先打包
          priority: -10,
          // 指定了哪些类型的块会被放入当前的 cache group 中
          // 只有入口模块（即应用的起始模块）会被放入当前的 cache group 中。
          // 这样做的目的是将第三方模块打包到一个单独的文件中，以减小每个入口文件的体积，加快页面加载速度。
          chunks: 'initial'
        },
        common: {
          // 将公共的 JavaScript 提取到一个单独的名为 common.[contenthash].js 的文件中
          // 这样可以避免重复加载相同的代码，减小打包后文件的体积，提高页面加载速度。
          name: 'common',
          // 表示在至少两个入口文件中被引用的模块才会被提取到这个块中。
          minChunks: 2,
          priority: -20,
          // 用于指定是否重用已经存在的块
          // 如果当前的 cache group 已经包含了某个模块，而且这个模块也符合其他 cache group 的规则，
          // 那么就会重用这个已存在的块，而不会重复打包。这样可以避免代码重复，提高打包的效率。
          reuseExistingChunk: true
        }
      }
    }
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js?|babel|es6)$/,
        loader: 'babel-loader',
        // 这里项目简单时不用配置，但当项目复杂时，就需要配置了
        // 例如当你的项目依赖了 lodash，而你的代码中又引用了 lodash，
        // 多个源代码目录，或者有特定目录需要处理
        include: [
          path.resolve(__dirname, 'examples'),
          path.resolve(__dirname, 'other-directory')
        ],
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(), // 确保添加插件实例
    new webpack.HotModuleReplacementPlugin(), // 确保添加 HMR 插件
    new HtmlWebpackPlugin({
      template: 'public/index.html' // 引用 index.html 模板文件
    }),
    new MiniCssExtractPlugin({
      // filename: '[name].[contenthash].css',
      filename: 'styles.[contenthash].css' // 将所有 CSS 提取到一个文件中
    })
  ],
  // todo: 这个配置到底是啥呀，搞得不挂在app
  // externals: {
  //   // vue: ['Vue', 'https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js'],
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 9000,
    host: 'client.baidu.com'
  }
};
