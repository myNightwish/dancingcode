<style>
  .mi-header, .mi-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .mi-aside {
    color: #333;
  }
  
  #chang-jian-ye-mian-bu-ju + .demo-container {
    .mi-header, .mi-footer {
      text-align: center;
    }
  
    .mi-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }
  
    .mi-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    & > .source > .mi-container {
      margin-bottom: 40px;
    
      &:nth-child(5) .mi-aside,
      &:nth-child(6) .mi-aside {
        line-height: 260px;
      }

      &:nth-child(7) .mi-aside {
        line-height: 320px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<mi-container>`：外层容器。当子元素中包含 `<mi-header>` 或 `<mi-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<mi-header>`：顶栏容器。

`<mi-aside>`：侧边栏容器。

`<mi-main>`：主要区域容器。

`<mi-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<mi-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<mi-container>`。
:::

### 常见页面布局

:::demo
```html
<mi-container>
  <mi-header>Header</mi-header>
  <mi-main>Main</mi-main>
</mi-container>

<mi-container>
  <mi-header>Header</mi-header>
  <mi-main>Main</mi-main>
  <mi-footer>Footer</mi-footer>
</mi-container>

<mi-container>
  <mi-aside width="200px">Aside</mi-aside>
  <mi-main>Main</mi-main>
</mi-container>

<mi-container>
  <mi-header>Header</mi-header>
  <mi-container>
    <mi-aside width="200px">Aside</mi-aside>
    <mi-main>Main</mi-main>
  </mi-container>
</mi-container>

<mi-container>
  <mi-header>Header</mi-header>
  <mi-container>
    <mi-aside width="200px">Aside</mi-aside>
    <mi-container>
      <mi-main>Main</mi-main>
      <mi-footer>Footer</mi-footer>
    </mi-container>
  </mi-container>
</mi-container>

<mi-container>
  <mi-aside width="200px">Aside</mi-aside>
  <mi-container>
    <mi-header>Header</mi-header>
    <mi-main>Main</mi-main>
  </mi-container>
</mi-container>

<mi-container>
  <mi-aside width="200px">Aside</mi-aside>
  <mi-container>
    <mi-header>Header</mi-header>
    <mi-main>Main</mi-main>
    <mi-footer>Footer</mi-footer>
  </mi-container>
</mi-container>

<style>
  .mi-header, .mi-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .mi-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .mi-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .mi-container {
    margin-bottom: 40px;
  }
  
  .mi-container:nth-child(5) .mi-aside,
  .mi-container:nth-child(6) .mi-aside {
    line-height: 260px;
  }
  
  .mi-container:nth-child(7) .mi-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<mi-container style="height: 500px; border: 1px solid #eee">
  <mi-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <mi-menu :default-openeds="['1', '3']">
      <mi-submenu index="1">
        <template slot="title"><i class="mi-icon-message"></i>导航一</template>
        <mi-menu-item-group>
          <template slot="title">分组一</template>
          <mi-menu-item index="1-1">选项1</mi-menu-item>
          <mi-menu-item index="1-2">选项2</mi-menu-item>
        </mi-menu-item-group>
        <mi-menu-item-group title="分组2">
          <mi-menu-item index="1-3">选项3</mi-menu-item>
        </mi-menu-item-group>
        <mi-submenu index="1-4">
          <template slot="title">选项4</template>
          <mi-menu-item index="1-4-1">选项4-1</mi-menu-item>
        </mi-submenu>
      </mi-submenu>
      <mi-submenu index="2">
        <template slot="title"><i class="mi-icon-menu"></i>导航二</template>
        <mi-menu-item-group>
          <template slot="title">分组一</template>
          <mi-menu-item index="2-1">选项1</mi-menu-item>
          <mi-menu-item index="2-2">选项2</mi-menu-item>
        </mi-menu-item-group>
        <mi-menu-item-group title="分组2">
          <mi-menu-item index="2-3">选项3</mi-menu-item>
        </mi-menu-item-group>
        <mi-submenu index="2-4">
          <template slot="title">选项4</template>
          <mi-menu-item index="2-4-1">选项4-1</mi-menu-item>
        </mi-submenu>
      </mi-submenu>
      <mi-submenu index="3">
        <template slot="title"><i class="mi-icon-setting"></i>导航三</template>
        <mi-menu-item-group>
          <template slot="title">分组一</template>
          <mi-menu-item index="3-1">选项1</mi-menu-item>
          <mi-menu-item index="3-2">选项2</mi-menu-item>
        </mi-menu-item-group>
        <mi-menu-item-group title="分组2">
          <mi-menu-item index="3-3">选项3</mi-menu-item>
        </mi-menu-item-group>
        <mi-submenu index="3-4">
          <template slot="title">选项4</template>
          <mi-menu-item index="3-4-1">选项4-1</mi-menu-item>
        </mi-submenu>
      </mi-submenu>
    </mi-menu>
  </mi-aside>
  
  <mi-container>
    <mi-header style="text-align: right; font-size: 12px">
      <mi-dropdown>
        <i class="mi-icon-setting" style="margin-right: 15px"></i>
        <mi-dropdown-menu slot="dropdown">
          <mi-dropdown-item>查看</mi-dropdown-item>
          <mi-dropdown-item>新增</mi-dropdown-item>
          <mi-dropdown-item>删除</mi-dropdown-item>
        </mi-dropdown-menu>
      </mi-dropdown>
      <span>王小虎</span>
    </mi-header>
    
    <mi-main>
      <mi-table :data="tableData">
        <mi-table-column prop="date" label="日期" width="140">
        </mi-table-column>
        <mi-table-column prop="name" label="姓名" width="120">
        </mi-table-column>
        <mi-table-column prop="address" label="地址">
        </mi-table-column>
      </mi-table>
    </mi-main>
  </mi-container>
</mi-container>

<style>
  .mi-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .mi-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `mi-header` 或 `mi-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |