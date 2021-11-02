import Vue from 'vue';
import VueRouter from 'vue-router';

// import {modulo} from "..."
import login from './modules/Login';
import application from './modules/Application';

Vue.use(VueRouter);

const Hello = () => import('./components/HelloWorld');

const routes = [
  ...application,
  ...login,
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
