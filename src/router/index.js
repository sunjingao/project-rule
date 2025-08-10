import NProgress from 'nprogress';
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

const asyncRoutes = [
  {
    path: '/use',
    title: '开始使用',
    children: [
      {
        path: '/use/des',
        title: '概述',
        component: () => import('../md/use/des.md')
      }
    ]
  },
  {
    path: '/flow',
    title: '流程规范',
    children: [
      {
        path: '/flow/flow',
        title: '流程规范',
        component: () => import('../md/flow/flow.md')
      },
    ]
  },
  {
    path: '/git',
    title: '分支规范',
    children: [
      {
        path: '/git/submit',
        title: '分支规范',
        component: () => import('../md/git/submit.md')
      },
      {
        path: '/git/commitLint',
        title: 'CommitLint配置',
        component: () => import('../md/git/commitLint.md')
      },
    ]
  },
  {
    path: '/code',
    title: '代码规范',
    children: [
      {
        path: '/code/js',
        title: 'JS规范',
        component: () => import('../md/code/js.md')
      },
      {
        path: '/code/css',
        title: 'css规范',
        component: () => import('../md/code/css.md')
      },
    ]
  },
  {
    path: '/framework',
    title: '架构规范',
    children: [
      {
        path: '/framework/framework',
        title: '文件结构',
        component: () => import('../md/framework/framework.md')
      },
      {
        path: '/framework/write',
        title: '编写规则',
        component: () => import('../md/framework/write.md')
      },
    ]
  },
  {
    path: '/comment',
    title: '注释规范',
    children: [
      {
        path: '/comment/comment',
        title: '注释规范',
        component: () => import('../md/comment/comment.md')
      },
    ]
  },
  {
    path: '/project',
    title: '项目规范',
    children: [
      {
        path: '/project/name',
        title: '命名规范',
        component: () => import('../md/project/name.md')
      },
      {
        path: '/project/write',
        title: '编写规范',
        component: () => import('../md/project/write.md')
      },
      {
        path: '/framework/vue',
        title: 'vue规范',
        component: () => import('../md/framework/vue.md')
      },
    ]
  },
  {
    path: '/selection',
    title: '选型规范',
    children: [
      {
        path: '/selection/selection',
        title: '选型规范',
        component: () => import('../md/selection/selection.md')
      },
    ]
  },
  {
    path: '/interface',
    title: '接口规范',
    children: [
      {
        path: '/interface/interface',
        title: '接口规范',
        component: () => import('../md/interface/interface.md')
      },
    ]
  },
  {
    path: '/ui-ue',
    title: 'UiUe规范',
    children: [
      {
        path: '/uiUe/rule',
        title: '原则',
        component: () => import('../md/ui-ue/rule.md')
      },
      {
        path: '/uiUe/color',
        title: '颜色',
        component: () => import('../md/ui-ue/color.md')
      },
      {
        path: '/uiUe/font',
        title: '文字',
        component: () => import('../md/ui-ue/font.md')
      },
      {
        path: '/uiUe/layout',
        title: '排版',
        component: () => import('../md/ui-ue/layout.md')
      },
    ]
  },
  {
    path: '/review',
    title: '评审规范',
    children: [
      {
        path: '/review/review',
        title: '评审规范',
        component: () => import('../md/review/review.md')
      },
    ]
  },
];

const routes = [
  ...asyncRoutes,
  {
    path: '/:catchAll(.*)',
    redirect: { path: '/use/des' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(() => {
  NProgress.done();
});

export {
  asyncRoutes,
  router
};
