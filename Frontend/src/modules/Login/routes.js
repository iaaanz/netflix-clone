const Login = () => import('./pages/Login');
const SelectUser = () => import('./pages/SelectUser');

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/selectUser',
    name: 'SelectUser',
    component: SelectUser,
  },
];
