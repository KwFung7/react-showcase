import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapPagination from './BootstrapPagination';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapPagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});
