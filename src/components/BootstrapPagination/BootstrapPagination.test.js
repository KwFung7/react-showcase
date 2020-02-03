import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapPagination from './BootstrapPagination';

const items = [
  { content: '', src: '#', disabled: false, control: { first: true }, 'aria-label': 'first-item' },
  { content: '', src: '#', disabled: false, control: { previous: true }, 'aria-label': 'previous-item' },
  { content: 1, src: '#', disabled: false, control: {}, 'aria-label': 'item-1' },
  { content: 2, src: '#', disabled: false, control: {}, 'aria-label': 'item-2' },
  { content: 3, src: '#', disabled: false, control: {}, 'aria-label': 'item-3' },
  { content: 4, src: '#', disabled: true, control: {}, 'aria-label': 'item-4' },
  { content: '', src: '#', disabled: false, control: { next: true }, 'aria-label': 'next-item' },
  { content: '', src: '#', disabled: false, control: { last: true }, 'aria-label': 'last-item' }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapPagination items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
