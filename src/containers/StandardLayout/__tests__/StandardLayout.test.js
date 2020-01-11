import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';
import StandardLayout from '../StandardLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Route path="/" name="Home" component={StandardLayout} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
