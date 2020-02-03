import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapUncontrolledDropdown from './BootstrapUncontrolledDropdown';

const items = [
  { key: 'header', title: 'header', isHeader: true, isDivider: false, isDisabled: false },
  { key: 'divider', title: 'divider', isHeader: false, isDivider: true, isDisabled: false },
  { key: 'disabled', title: 'disabled', isHeader: false, isDivider: false, isDisabled: true },
  { key: 'item1', title: 'Item 1', isHeader: false, isDivider: false, isDisabled: false },
  { key: 'item2', title: 'Item 2', isHeader: false, isDivider: false, isDisabled: false },
  { key: 'item3', title: 'Item 3', isHeader: false, isDivider: false, isDisabled: false },
  { key: 'item4', title: 'Item 4', isHeader: false, isDivider: false, isDisabled: false },
];

const dropdowns = [
  { title:'primary', direction:'up', color:'primary', size:'lg' },
  { title:'secondary', direction:'left', color:'secondary', size:'sm' },
  { title:'success', direction:'right', color:'success', size:'lg' },
  { title:'info', direction:'up', color:'info', size:'sm' },
  { title:'warning', direction:'left', color:'warning', size:'lg' },
  { title:'danger', direction:'right', color:'danger', size:'sm' },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapUncontrolledDropdown items={items} dropdowns={dropdowns} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
