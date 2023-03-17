window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Cara ke 2 => Menggunakan import
//////////////////////////////////////////////////// EROR ////////////////////////////////////////////////////
// ====== Pages Not Found =======
import NotFound from '../error/NotFound.vue';

/////////////////////////////////////////////////// PAGES ///////////////////////////////////////////////////
// ====== Home =======
import Home from '../pages/Home.vue';
// ====== Galeri =======
import Galeri from '../pages/Galeri.vue';
// ====== Blog =======
import Blog from '../pages/Blog.vue';

/////////////////////////////////////////////////// AUTH ///////////////////////////////////////////////////
// ====== Pages Login =======
import Login from '../login/Login.vue';


const routes = [
    {
        path: '*',
        component: NotFound
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Galeri',
        path: '/galeri',
        component: Galeri
    },
    {
        name: 'Blog',
        path: '/blog',
        component: Blog
    },
];

// OOP
const router = new VueRouter ({
    linkActiveClass: 'active',
    mode: 'history',
    routes,
});

export default router;
