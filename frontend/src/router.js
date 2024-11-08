// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan di rute
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  { 
    path: '/home/admin', 
    name: 'AdminHome', 
    component: Home, 
    props: { role: 'admin' } 
  },
  { 
    path: '/home/author', 
    name: 'AuthorHome', 
    component: Home, 
    props: { role: 'author' } 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
