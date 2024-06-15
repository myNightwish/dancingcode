/*!
 * strip-tags <https://github.com/jonschlinkert/strip-tags>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';
// 使用了 Node.js 中的 Cheerio 库来操作 HTML 字符串
var cheerio = require('cheerio');

// 用于从给定的 HTML 字符串中移除指定的 HTML 标签。
exports.strip = function(str, tags) {
  var $ = cheerio.load(str, {decodeEntities: false});

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  var len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html();
};
// 从给定的 HTML 字符串中提取指定 HTML 标签的内容。
exports.fetch = function(str, tag) {
  var $ = cheerio.load(str, {decodeEntities: false});
  if (!tag) return str;

  return $(tag).html();
};
// 使用场景：这些函数通常用于处理从网络中获取的 HTML 数据或者在服务器端渲染中需要对 HTML 进行操作的情况。
// 例如，在爬虫应用中，可以使用 strip 函数去除不需要的标签，或者使用 fetch 函数提取特定的内容。