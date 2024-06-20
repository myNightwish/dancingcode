'use strict';

console.log();
// 注册退出事件：输出空行
process.on('exit', () => {
  console.log();
});

// 如果未传入组件名，则输出错误信息并退出程序
if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
// 获取命令行参数：组件名
const componentname = process.argv[2];
// 获取组件名（英文），并转换组件名为大驼峰命名法
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
// 定义需要创建的文件及其内容
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="mi-${componentname}"></div>
</template>

<script>
export default {
  name: 'Mi${ComponentName}'
};
</script>`
  },
  {
    filename: path.join('../../examples/docs/zh-CN', `${componentname}.md`),
    content: `## ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`
  }
];

// 更新 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 创建文件结构
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 更新导航配置：
// 添加到 nav.config.json
const chineseName = process.argv[3] || componentname;
// 拿到路由配置json
const navConfigFile = require('../../examples/nav.config.json');

Object.keys(navConfigFile).forEach(lang => {
  //  这里配置的4是name为组件配置
  let groups = navConfigFile[lang][4].groups;
  groups[groups.length - 1].list.push({
    path: `/${componentname}`,
    title: lang === 'zh-CN' && componentname !== chineseName
      ? `${ComponentName} ${chineseName}`
      : ComponentName
  });
});
fileSave(path.join(__dirname, '../../examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('--------DONE--------!');
