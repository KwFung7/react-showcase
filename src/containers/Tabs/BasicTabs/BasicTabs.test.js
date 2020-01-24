import React from 'react';
import ReactDOM from 'react-dom';
import BasicTabs from './BasicTabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicTabs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
