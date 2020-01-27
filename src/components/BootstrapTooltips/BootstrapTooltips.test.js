import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTooltips from './BootstrapTooltips';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapTooltips />, div);
  ReactDOM.unmountComponentAtNode(div);
});
