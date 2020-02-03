import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapAccordion from './BootstrapAccordion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BootstrapAccordion label="Toggle">
       Anim pariatur cliche reprehenderit,
      enim eiusmod high life accusamus terry richardson ad squid. Nihil
      anim keffiyeh helvetica, craft beer labore wes anderson cred
      nesciunt sapiente ea proident.
    </BootstrapAccordion>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
