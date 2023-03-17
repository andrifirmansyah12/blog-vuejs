/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import router from './router';
import VueNoty from 'vuejs-noty';

Vue.use(VueNoty)

import 'vuejs-noty/dist/vuejs-noty.css';

Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        title: 'Andri Firmansyah',
    },
    router,
});
