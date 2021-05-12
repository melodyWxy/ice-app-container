<!--
 * @Author: 六弦(melodyWxy)
 * @Date: 2021-05-12 21:44:41
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2021-05-13 00:17:30
 * @FilePath: /ls/Users/wxy/codeWorks/githubPros/ice-w-front/icestark-framework/README.md
 * @Description: update here
-->
# ice-stark-layout


## 开发环境
node : 推荐版本14.16.0 npm : 推荐版本v7(如：v7.9.0)

```shell
git clone [应用仓库http地址]
cd [应用目录]
# 推荐使用华为云npm源，快速稳定
npm i --registry=https://mirrors.huaweicloud.com/repository/npm/  

```
## 本地开发

- 容器应用根路径下，执行命令 npm run start 启动容器项目即可。
- 子应用可单独开发，根路径下 npm run start 启动容器项目即可。

## 本地微前端连调

- 子应用打包(npm run build)，将打包后的产物(在dist目录)，复制到主应用的public/[子应用名称]下；如： public/app1
- 容器应用根路径下，执行命令 npm run local-run-time 
- 容器应用根路径下，执行命令 npm run start 启动容器项目即可。

## 子应用注册
+ 注册路径:  /src/app.tsx   
+ 配置url:  /api/[静态资源路径]  注意，这里的/api使用了代理，生产环境要另外配置，参考下方生产模式
```js
    //这里参照public中已经打入的静态资源app1
    {
        path: '/myapp1',
        title: '自己的子应用1',
        sandbox: true,
        url: [
            // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
            '/app1/js/index.js',
            '/app1/css/index.css',
        ],
    }

```
## 容器应用菜单配置子应用
+ 路径： /src/layouts/BasicLayout/menuConfig.ts
+ 参照路径内的配置即可


## 全局状态管理
如登陆后的状态，user信息，身份切换，这些全局状态和动作使用全局状态机管理，参考(ice文档)[ice.work]



## 生产模式
+ 子应用打包后的产物扔到 cdn下；
+ /src/app.tsx里 对应的url配置 指向该资源cdn路径即可

## 使用

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`



## 目录结构

- 应用配置: `src/app.js`
- 路由配置: `src/routes.js`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

## 效果图

![screenshot](https://img.alicdn.com/tfs/TB14igtaVT7gK0jSZFpXXaTkpXa-2878-1368.png)
