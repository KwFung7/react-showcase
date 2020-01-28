import React from 'react';
import ReactDOM from 'react-dom';
import BasicPagination from './BasicPagination';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicPagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});
