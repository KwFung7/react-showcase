import React from 'react';
import ReactDOM from 'react-dom';
import StandardFooter from '../StandardFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StandardFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
