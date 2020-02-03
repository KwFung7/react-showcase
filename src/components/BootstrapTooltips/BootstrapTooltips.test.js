import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTooltips from './BootstrapTooltips';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const btnDiv = document.createElement('div');
  btnDiv.setAttribute("id", "tooltips-top");

  document.body.appendChild(div);
  document.body.appendChild(btnDiv);
  ReactDOM.render(<BootstrapTooltips target="tooltips-top">Top tooltips</BootstrapTooltips>, div);
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.unmountComponentAtNode(btnDiv);
});
