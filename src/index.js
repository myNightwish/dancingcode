import Loading from '../packages/loading/index.js';
import MiIcon from '../packages/icon/index.js';
import MiButton from '../packages/button/index.js';
import MiButtonGroup from '../packages/button-group/index.js';

import MiMain from '../packages/main/index.js';
import MiHeader from '../packages/header/index.js';
import MiFooter from '../packages/footer/index.js';
import MiContainer from '../packages/container/index.js';
import MiAside from '../packages/aside/index.js';


// 导入组件库所有组件
const components = [Loading, MiIcon, MiButton, MiButtonGroup,
    MiMain, MiHeader, MiFooter, MiContainer, MiAside
];

// 定义组件库组件注册安装的install方法
// 如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    // todo: 这个属性哪儿来的，他是怎么判断每个组件的安装状态
    if (install.installed) return;

    components.forEach(component => {
        Vue.component(component.name, component); // 使用component注册组件
    });
};

// 自动安装：判断是否用<script scr=''></script>的方式直接引入文件
// 通过 <script> 标签引入的 JavaScript 文件，会在加载完成后自动解析并执行其中的代码
if (typeof window.Vue !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// 导出install、各个组件
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 具体的组件列表
    Loading,
    MiIcon,
    MiButton,
    MiButtonGroup,
    MiMain,
    MiHeader,
    MiFooter,
    MiContainer,
    MiAside
};
