import React from 'react';
import ReactDOM from 'react-dom';
import BasicListGroup from './BasicListGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicListGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
