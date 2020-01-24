import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapListGroup from './BootstrapListGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapListGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
