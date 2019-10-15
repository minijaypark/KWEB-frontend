import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () =>
        import(/* webpackChunkName: "signup" */ './views/SignUp.vue'),
    },
    {
      path: '/articles',
      component: () =>
        import(/* webpackChunkName: "articles" */ './views/Articles.vue'),
      children: [
        {
          path: ':bulletinName',
          component: () =>
            import(
              /* webpackChunkName: "emptyRouterView" */ './views/EmptyRouterView.vue'
            ),
          children: [
            {
              path: '',
              component: () =>
                import(
                  /* webpackChunkName: "postList" */ './components/PostList.vue'
                ),
            },
            {
              path: ':postId',
              name: 'post',
              component: () =>
                import(
                  /* webpackChunkName: "postView" */ './components/PostView.vue'
                ),
            },
            {
              path: ':postId/modify',
              name: 'post-modify',
              component: () =>
                import(
                  /* webpackChunkName: "postView" */ './components/PostModify.vue'
                ),
            },
          ],
        },
      ],
    },
  ],
});
