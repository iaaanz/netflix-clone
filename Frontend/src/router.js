import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './modules/Login';
import selectUser from './modules/Login';

// import {modulo} from "..."
import application from './modules/Application';

Vue.use(VueRouter);

const Hello = () => import('./components/HelloWorld.vue');

const routes = [
  ...application,
  ...login,
  ...selectUser,
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;
