import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/HelloWorld")
    },
    {
      path: "/patients",
      name: "Patients",
      component: () => import("./sections/Patients")
    },
    {
      path: "/staff",
      name: "Staff",
      component: () => import("./sections/Staff")
    },
    {
      path: "/rendez-vous",
      name: "Rendez-vous",
      component: () => import("./sections/RendezVous")
    }
  ]
});
