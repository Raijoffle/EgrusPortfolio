import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "portfolio",
        component: () => import(/* webpackChunkName: "portfolio" */ "../views/PortfolioView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/roadmap",
        name: "roadmap",
        // eslint-disable-next-line
        component: () => import(/* webpackChunkName: "roadmap" */ "../views/RoadmapsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
