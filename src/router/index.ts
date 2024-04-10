import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import EducationView from "@/views/EducationView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import WorkView from "@/views/WorkView.vue";
import SkillsView from "@/views/SkillsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/edu",
    name: "education",
    component: EducationView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
