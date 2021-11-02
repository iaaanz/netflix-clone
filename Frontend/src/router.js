import Vue from 'vue';
import VueRouter from 'vue-router';

//import {modulo} from "..."
import application from './modules/Application'

Vue.use(VueRouter);

const Hello = () => import('../src/components/HelloWorld.vue');

const routes = [
  ...application,
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
});

export default router;