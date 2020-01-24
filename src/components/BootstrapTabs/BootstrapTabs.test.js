import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTabs from './BootstrapTabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapTabs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
