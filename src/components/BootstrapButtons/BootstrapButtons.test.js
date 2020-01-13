import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapButtons from './BootstrapButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
