import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard'));
const BasicButtons = React.lazy(() => import('./containers/Buttons/BasicButtons'));
const BasicDropdown = React.lazy(() => import('./containers/Dropdown/BasicDropdown'));
const BasicListGroup = React.lazy(() => import('./containers/ListGroup/BasicListGroup'));
const LearnMore = React.lazy(() => import('./containers/LearnMore'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/buttons', exact: true, name: 'Buttons', component: BasicButtons },
  { path: '/buttons/basic-buttons', name: 'Basic Buttons', component: BasicButtons },
  { path: '/dropdown', exact: true, name: 'Dropdown', component: BasicDropdown },
  { path: '/dropdown/basic-dropdown', name: 'Basic Dropdown', component: BasicDropdown },  
  { path: '/list-group', exact: true, name: 'List Group', component: BasicListGroup },
  { path: '/list-group/basic-list-group', name: 'Basic List Group', component: BasicListGroup },
  { path: '/learn-more', name: 'Learn More', component: LearnMore }
];

export default routes;
