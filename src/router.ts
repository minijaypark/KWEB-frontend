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
        import(/* webpackChunkName: "articles" */ './views/Login.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () =>
        import(/* webpackChunkName: "articles" */ './views/Articles.vue'),
      children: [
        {
          path: 'notification',
          name: 'notification',
          component: () =>
            import(
              /* webpackChunkName: "notification" */ './components/PostList.vue'
            ),
        },
        // {
        //   path: 'schedule',
        //   name: 'schedule',
        //   component: () =>
        //     import(
        //       /* webpackChunkName: "schedule" */ './components/Schedule.vue'
        //     ),
        // },
        // {
        //   path: 'juns',
        //   name: 'juns',
        //   component: () =>
        //     import(/* webpackChunkName: "juns" */ './components/Juns.vue'),
        // },
        // {
        //   path: 'submission',
        //   name: 'submission',
        //   component: () =>
        //     import(
        //       /* webpackChunkName: "submission" */ './components/Submission.vue'
        //     ),
        // },
        // {
        //   path: 'jungs',
        //   name: 'jungs',
        //   component: () =>
        //     import(/* webpackChunkName: "jungs" */ './components/Jungs.vue'),
        // },
        // {
        //   path: 'report',
        //   name: 'report',
        //   component: () =>
        //     import(/* webpackChunkName: "report" */ './components/Report.vue'),
        // },
      ],
    },
    // {
    //   path: '/leaderboard/:leaderboardId',
    //   name: 'leaderboard-detail',
    //   // route level code-splitting
    //   // this generates a separate chunk (articles.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "leaderboard-detail" */ './views/LeaderboardDetail.vue'
    //     ),
    // },
  ],
});
