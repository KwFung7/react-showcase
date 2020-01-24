import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import BootstrapTabs from '../../../components/BootstrapTabs';
import codeUrl from '../../../code-url';

class BasicTabs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.tabs = [
      { tabID: 'tab1', tabTitle: 'Tab 1', isDisabled: false},
      { tabID: 'tab2', tabTitle: 'Tab 2', isDisabled: false},
      { tabID: 'tab3', tabTitle: 'Tab 3', isDisabled: true}
    ];
    this.state = {
      activeTab: 'tab1'
    };
  }

  toggle(tab) {
    this.setState({
        activeTab: tab
    });
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Tabs</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapTabs} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapTabs {...this.state} tabs={this.tabs} toggle={this.toggle} />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicTabs;
