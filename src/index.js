/* Automatically generated by './build/bin/build-entry.js' */

import MiIcon from '../packages/icon/index.js';
import MiButton from '../packages/button/index.js';
import MiRainbow from '../packages/rainbow/index.js';
import MiBacktop from '../packages/backtop/index.js';
import MiDivider from '../packages/divider/index.js';
import MiRow from '../packages/row/index.js';
import MiCol from '../packages/col/index.js';
import MiProgress from '../packages/progress/index.js';
import MiLoading from '../packages/loading/index.js';
import MiSkeleton from '../packages/skeleton/index.js';
import MiSkeletonItem from '../packages/skeleton-item/index.js';
/* 导入组件库所有组件 */
const components = [
      MiIcon,
  MiButton,
  MiRainbow,
  MiBacktop,
  MiDivider,
  MiRow,
  MiCol,
  MiProgress,
  MiLoading,
  MiSkeleton,
  MiSkeletonItem
];

/* 定义组件库组件注册安装的install方法, 当使用 use 注册插件，则所有的组件都将被注册 */
const install = function(Vue, opts = {}) {

    components.forEach(component => {
      Vue.component(component.name, component);
    });

    Vue.use(MiLoading.directive);

    Vue.prototype.$ELEMENT = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    };

    Vue.prototype.$loading = MiLoading.service;
    /* Vue.prototype.$msgbox = MessageBox;
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
    MiIcon,
    MiButton,
    MiRainbow,
    MiBacktop,
    MiDivider,
    MiRow,
    MiCol,
    MiProgress,
    MiLoading,
    MiSkeleton,
    MiSkeletonItem
};
