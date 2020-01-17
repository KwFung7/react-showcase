import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard'));
const BasicButtons = React.lazy(() => import('./containers/Buttons/BasicButtons'));
const LearnMore = React.lazy(() => import('./containers/LearnMore'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/buttons', exact: true, name: 'Buttons', component: BasicButtons },
  { path: '/buttons/basic-buttons', name: 'Basic Buttons', component: BasicButtons },
  { path: '/learn-more', name: 'Learn More', component: LearnMore }
];

export default routes;
