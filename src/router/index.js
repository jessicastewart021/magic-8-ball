import Vue from "vue";
import VueRouter from "vue-router";
import MagicEightBall from "../views/MagicEightBall";

Vue.use(VueRouter);

const routes = [
  {
    name: "Magic 8 Ball",
    path: "*",
    meta: { title: "Magic 8 Ball" },
    component: MagicEightBall,
  },
  {
    name: "Magic 8 Ball",
    path: "/magic-8-ball",
    meta: { title: "Magic 8 Ball" },
    component: MagicEightBall,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});

function setPageTitle(to, from, next) {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = `${nearestWithTitle.meta.title}`;
  }
  next();
}

router.beforeEach(setPageTitle);

export default router;
