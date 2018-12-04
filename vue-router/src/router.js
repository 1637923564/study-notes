import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Left from "./views/user-views/Left.vue";
import Content from "./views/user-views/Content.vue";
import Foot from "./views/user-views/Foot.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/:id",
      name: "user",
      props: true,
      component: User,
      children: [
        {
          path: "views/views",
          redirect: to => `/user/${to.params.id}/views`
        },
        {
          path: "/user/:id/views",
          name: "User-views",
          components: {
            default: Left,
            con: Content,
            foo: Foot
          },
          beforeEnter: (to, from, next) => {
            console.group("%c 路由独享钩子：beforeEnter", "color: green");
            console.log(`${from.path} >>> ${to.path}`);
            console.groupEnd();
            next();
          }
        }
      ],
      beforeEnter: (to, from, next) => {
        console.group("%c 路由独享钩子：beforeEnter", "color: green");
        console.log(`${from.path} >>> ${to.path}`);
        console.groupEnd();
        next();
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.group("全局前置守卫：beforeEach>>>");
  console.log(`${from.path} >>> ${to.path}`);
  console.groupEnd();
  next();
});
router.beforeResolve((to, from, next) => {
  console.group("全局解析守卫：beforeResolve>>>");
  console.log(`${from.path} >>> ${to.path}`);
  console.groupEnd();
  next();
});
router.afterEach((to, from) => {
  console.group("全局后置钩子：afterEach>>>");
  console.log(`${from.path} >>> ${to.path}`);
  console.groupEnd();
});

export default router;
