const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const md = require('markdown-it')();
const slugify = require('transliteration').slugify;

const striptags = require('./strip-tags');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: isProd ? {
    docs: './examples/entry.js',
    'mi-ui': './src/index.js'
  } : './examples/entry.js',
  output: {
    path: path.resolve(process.cwd(), '../dist/mi-ui/'),
    publicPath: process.env.CI_ENV || '',
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    port: 8088,
    host: 'client.baidu.com'
  },
  performance: {
    hints: false
  },
  stats: {
    children: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              preventExtract: true,
              raw: true,
              preprocess: function(MarkdownIt, source) {
                MarkdownIt.renderer.rules.table_open = function() {
                  return '<table class="table">';
                };
                MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                return source;
              },
              use: [
                [require('markdown-it-anchor'), {
                  level: 2,
                  slugify: slugify,
                  permalink: true,
                  permalinkBefore: true
                }],
                [require('markdown-it-container'), 'demo', {
                  validate: function(params) {
                    return params.trim().match(/^demo\s*(.*)$/);
                  },

                  render: function(tokens, idx) {
                    var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                    if (tokens[idx].nesting === 1) {
                      var description = (m && m.length > 1) ? m[1] : '';
                      var content = tokens[idx + 1].content;
                      var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                      var script = striptags.fetch(content, 'script');
                      var style = striptags.fetch(content, 'style');
                      var jsfiddle = { html: html, script: script, style: style };
                      var descriptionHTML = description
                        ? md.render(description)
                        : '';

                      jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                      return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                                <div class="source" slot="source">${html}</div>
                                ${descriptionHTML}
                                <div class="highlight" slot="highlight">`;
                    }
                    return '</div></demo-block>\n';
                  }
                }],
                [require('markdown-it-container'), 'tip'],
                [require('markdown-it-container'), 'warning']
              ]
            }
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/public/index.tpl',
      filename: './index.html'
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(), // 确保添加插件实例
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    })
  ]
};

if (isProd) {
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  );
}

module.exports = webpackConfig;
