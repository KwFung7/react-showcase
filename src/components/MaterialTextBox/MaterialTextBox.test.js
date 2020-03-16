import React from 'react';
import ReactDOM from 'react-dom';
import MaterialButtons from './MaterialTextBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MaterialButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
