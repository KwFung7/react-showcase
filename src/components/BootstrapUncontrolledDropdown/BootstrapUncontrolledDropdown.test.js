import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapUncontrolledDropdown from './BootstrapUncontrolledDropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapUncontrolledDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
