import Vue from "vue";
import VueRouter from "vue-router";

import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

// import createListView from "../views/CreateListView.js";

import bus from "../utils/bus.js";

import { store } from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      // component: createListView('NewsView'),
      component: NewsView,
      // beforeEnter : 특정 URL 접근 시 인증정보 유무 같은 확인할 때 많이 사용
      // to : 이동할 URL 라우터 정보
      // from : 현재 URL 라우터 정보
      // next : 페이지 이동을 위한 함수
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        // router -> store 접근 시 store import 필요
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView('JobsView'),
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            // bus.$emit("end:spinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});