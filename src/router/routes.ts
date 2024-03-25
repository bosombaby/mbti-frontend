import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "畅玩日"
        }
      },
      {
        path: "role",
        name: "Role",
        component: () => import("@/views/role/index.vue"),
        meta: {
          title: "人格记"
        }
      },
      {
        path: "quiz",
        name: "Quiz",
        component: () => import("@/views/quiz/index.vue"),
        meta: {
          title: "去测试",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
