import Vue from 'vue'
import Router from 'vue-router'


import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contact from './components/views/Contact.vue'
import User from './components/users/User.vue'


Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User
        }
    ],
    linkExactActiveClass: 'has-text-warning'
})