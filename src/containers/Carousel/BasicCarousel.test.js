import React from 'react';
import ReactDOM from 'react-dom';
import BasicCarousel from './BasicCarousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
