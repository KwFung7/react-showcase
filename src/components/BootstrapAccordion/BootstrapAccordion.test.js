import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapAccordion from './BootstrapAccordion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapAccordion />, div);
  ReactDOM.unmountComponentAtNode(div);
});
