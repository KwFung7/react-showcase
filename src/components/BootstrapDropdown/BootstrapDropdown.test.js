import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapDropdown from './BootstrapDropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
