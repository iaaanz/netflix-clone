const Teste = () => import('./modules/Teste.vue');

export default [
  {
    path: '/teste',
    name: 'Teste',
    component: Teste,
    meta: {
      title: 'Titulo Teste',
    },
  },
];
