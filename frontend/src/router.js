// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan di rute
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
// import HelloWorld from './components/HelloWorld.vue'; // Path impor diperbaiki

const routes = [
  {
    path: '/',
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
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
