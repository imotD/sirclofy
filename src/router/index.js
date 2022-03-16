import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/explor/:type",
    name: "ExplorChart",
    props: true,
    component: () => import("../views/ExplorChart.vue")
  },
  {
    path: "/search/:key",
    name: "Search",
    component: () => import("../views/Search.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
