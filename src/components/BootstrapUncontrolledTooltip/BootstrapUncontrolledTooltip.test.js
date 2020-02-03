import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapUncontrolledTooltip from './BootstrapUncontrolledTooltip';

const items = [
  { targetID: 'tooltips-top', placement: 'top', tooltipText: 'Top tooltips', buttonText: 'Top tooltips' },
  { targetID: 'tooltips-right', placement: 'right', tooltipText: 'Right tooltips', buttonText: 'Right tooltips' },
  { targetID: 'tooltips-bottom', placement: 'bottom', tooltipText: 'Bottom tooltips', buttonText: 'Bottom tooltips' }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  const btnDiv = document.createElement('div');
  btnDiv.setAttribute("id", "tooltips-top");

  document.body.appendChild(div);
  document.body.appendChild(btnDiv);
  ReactDOM.render(<BootstrapUncontrolledTooltip items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.unmountComponentAtNode(btnDiv);
});
