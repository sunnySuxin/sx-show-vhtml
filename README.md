# shop-vhtml

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
# 第三方图标引用：
1、http://www.iconfont.cn  注册
2、新增项目。
3、添加需要的图标至购物车中
    批量添加：
      var icons = document.querySelectorAll('.icon-gouwuche1');

      var auto_click = function(i) {
          if (i < icons.length) {
              setTimeout(function() {
                  icons.item(i).click();
                  auto_click(i + 1);
              },
              600);
          }
      };
      auto_click(0);
4、下载文件至本地，将下载的文件添加到 assets/icon 中
5、在main.js 中添加引用 import './assets/icon/iconfont.css'


#@click.native为什么要加上native
  1、因为加上native后，在封装的组件中才能监听原生事件。
  2、父组件通过 prop 传递数据给子组件，子组件触发事件给父组件。但父组件想在子组件上监听自己的 click 的话，
     需要加上 native 修饰符，故写法就像上面这样。

#click.native.prevent中的prevent作用
  阻止冒泡，防止重复提交

#$refs的使用
  只需在标签上的ref绑定对应的值，这就可以使用$refs操作dom节点
