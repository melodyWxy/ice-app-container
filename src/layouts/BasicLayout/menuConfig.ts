/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2021-05-12 21:44:41
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2021-05-12 22:52:26
 * @FilePath: /ls/Users/wxy/codeWorks/githubPros/ice-w-front/icestark-framework/src/layouts/BasicLayout/menuConfig.ts
 * @Description: update here
 */
const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: 'Page级组件-Home',
    path: '/',
    icon: 'chart-pie',
  },
  {
    name: 'Page级组件-About',
    path: '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Page级组件-Login',
    path: '/login',
    icon: 'account',
  },
  {
    name: 'Angular',
    icon: 'set',
    children: [
      {
        path: '/angular',
        name: 'router contact',
      },
      {
        path: '/angular/detail',
        name: 'router detail',
      },
    ],
  },
  {
    name: '子应用1-商家平台',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '商家首页',
      },
      {
        path: '/seller/list',
        name: '商家列表',
      },
      {
        path: '/seller/detail',
        name: '商家详情',
      },
      {
        path: '/seller/404',
        name: '商家 404',
      },
    ],
  },
  {
    name: '自己的子应用',
    icon: 'atm',
    children: [
      {
        path: '/myapp1',
        name: '商家首页',
      },
      {
        path: '/myapp1/list',
        name: '商家列表',
      },
    ],
  },
  {
    name: '子应用2-小二平台',
    icon: 'account',
    children: [
      {
        path: '/waiter',
        name: '小二首页',
      },
      {
        path: '/waiter/list',
        name: '小二列表',
      },
      {
        path: '/waiter/detail',
        name: '小二详情',
      },
      {
        path: '/waiter/404',
        name: '小二 404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
