'use strict';
var postcss = require('postcss');
var scssSyntax = require('postcss-scss'); // 引入postcss-scss语法插件
var fs = require('fs');
var path = require('path');
// 读取字体文件:该文件包含了图标的样式定义。
var fontFile = fs.readFileSync(
    path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'),
    'utf8'
);

// 使用postcss解析icon.scss文件，得到一个包含所有节点的数组。
// var nodes = postcss.parse(fontFile).nodes;
var nodes = postcss().process(fontFile, { syntax: scssSyntax }).root.nodes;

var classList = [];

nodes.forEach(node => {
    var selector = node.selector || '';
    // node获取选择器名称匹配 .mi-icon-iconName:before
    var reg = new RegExp(/\.mi-icon-([^:]+):before/);
    var arr = selector.match(reg);

    if (arr && arr[1]) {
        classList.push(arr[1]);
    }
});

// 将提取到的图标类名数组转换为JSON格式并写入到icon.json文件中。
fs.writeFile(
    path.resolve(__dirname, '../../examples/icon.json'),
    JSON.stringify(classList),
    () => {}
);
