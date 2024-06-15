var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

// 最终生成的入口文件路径
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
//  模板定义
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
/* 导入组件库所有组件 */
const components = [
{{install}}
];

/* 定义组件库组件注册安装的install方法, 当使用 use 注册插件，则所有的组件都将被注册 */
const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  /* Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }; */

  /* Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message; */
};

/* 自动安装：判断是否用<script scr=''></script>的方式直接引入文件
  通过 <script> 标签引入的 JavaScript 文件，会在加载完成后自动解析并执行其中的代码 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* 导出install、各个组件 */
export default {
  /* 导出的对象必须具有 install，才能被 Vue.use() 方法安装 */
  install,
  {{list}}
};
`;

var ComponentNames = Object.keys(Components);
// 用来存储不同类型模版渲染的结果
var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase('mi-'+name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if (['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(componentName) === -1) {
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('-------- [build entry] DONE --------:', OUTPUT_PATH);