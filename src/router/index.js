import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/home.vue";
import about from "@/view/about.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;