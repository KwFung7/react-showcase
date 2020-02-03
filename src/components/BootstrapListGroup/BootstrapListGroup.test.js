import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapListGroup from './BootstrapListGroup';

const items = [
  { key: 'primary', title: 'Primary isActive', color:'primary', isActive: true, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'secondary', title: 'Secondary isAction', color:'secondary', isActive: false, isAction: true, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'success', title: 'Success isDisabled', color:'success', isActive: false, isAction: false, isDisabled: true, link: 'http://www.accenture.com' },
  { key: 'info', title: 'Info', color:'info', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'warning', title: 'Warning', color:'warning', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
  { key: 'danger', title: 'Danger', color:'danger', isActive: false, isAction: false, isDisabled: false, link: 'http://www.accenture.com' },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapListGroup items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
