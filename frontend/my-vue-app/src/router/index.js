import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import RegisterPage from "../views/RegisterPage.vue"; // Create this view for the register page
import LoginPage from "../views/LoginPage.vue"; // Create this view for the login page

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;