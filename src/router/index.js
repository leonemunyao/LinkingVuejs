// Define Our routing rules //
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../assets/Views/HomeView.vue"
import AboutView from "../assets/Views/AboutView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
          path: "/",
          name: "home",
          component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        }
    ]
})


export default router