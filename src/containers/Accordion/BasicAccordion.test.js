import React from 'react';
import ReactDOM from 'react-dom';
import BasicAccordion from './BasicAccordion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicAccordion />, div);
  ReactDOM.unmountComponentAtNode(div);
});
