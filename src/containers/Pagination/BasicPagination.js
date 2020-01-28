import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapPagination from '../../components/BootstrapPagination';
import codeUrl from '../../code-url';

class BasicPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab1'
    };
  }

  toggle = (tab) => {
    this.setState({
        activeTab: tab
    });
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Pagination</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapTabs} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapPagination {...this.state} />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicPagination;
