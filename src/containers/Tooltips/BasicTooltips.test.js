import React from 'react';
import ReactDOM from 'react-dom';
import BasicTooltips from './BasicTooltips';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicTooltips />, div);
  ReactDOM.unmountComponentAtNode(div);
});
