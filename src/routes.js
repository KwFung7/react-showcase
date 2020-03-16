import React from 'react';

const Dashboard = React.lazy(() => import('./containers/Dashboard'));
const BasicButtons = React.lazy(() => import('./containers/Buttons/BasicButtons'));
const BasicDropdown = React.lazy(() => import('./containers/Buttons/BasicDropdown'));
const BasicListGroup = React.lazy(() => import('./containers/ListGroup'));
const BasicTabs = React.lazy(() => import('./containers/Tabs'));
const BasicTooltips = React.lazy(() => import('./containers/Tooltips'));
const BasicAccordion = React.lazy(() => import('./containers/Accordion'));
const BasicCarousel = React.lazy(() => import('./containers/Carousel'));
const BasicPagination = React.lazy(() => import('./containers/Pagination'));
const TextBox = React.lazy(() => import('./containers/FormControls/TextBox'));
const LearnMore = React.lazy(() => import('./containers/LearnMore'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/buttons', exact: true, name: 'Buttons', component: BasicButtons },
  { path: '/buttons/basic-buttons', name: 'Basic Buttons', component: BasicButtons },
  { path: '/buttons/button-dropdown', name: 'Button Dropdown', component: BasicDropdown },
  { path: '/list-group', exact: true, name: 'List Group', component: BasicListGroup },
  { path: '/tabs', exact: true, name: 'Tabs', component: BasicTabs },
  { path: '/tooltips', exact: true, name: 'Tooltips', component: BasicTooltips },
  { path: '/accordion', exact: true, name: 'Accordion', component: BasicAccordion },
  { path: '/carousel', exact: true, name: 'Carousel', component: BasicCarousel },
  { path: '/pagination', exact: true, name: 'Pagination', component: BasicPagination },
  { path: '/form-controls', exact: true, name: 'Form Controls', component: TextBox },
  { path: '/form-controls/text-box', name: 'Text Box', component: TextBox },
  { path: '/learning', name: 'Learning', component: LearnMore }
];

export default routes;
