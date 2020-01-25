import React from 'react';
import ReactDOM from 'react-dom';
import BasicDropdown from './BasicDropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicDropdown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
