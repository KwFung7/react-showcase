import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapCarousel from './BootstrapCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
