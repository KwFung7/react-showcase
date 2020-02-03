import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapPagination from '../../components/BootstrapPagination';
import codeUrl from '../../code-url';

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

class BasicPagination extends Component {
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Pagination</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapPagination} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapPagination items={items} aria-label="Pagination example" />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicPagination;
