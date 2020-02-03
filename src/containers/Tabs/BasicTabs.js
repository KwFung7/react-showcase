import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapTabs from '../../components/BootstrapTabs';
import codeUrl from '../../code-url';

const tabPaneBody1 = (
  <Fragment>
    <h4>Tab 1 Contents</h4>
    <div>Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </Fragment>
);

const tabPaneBody2 = (
  <Fragment>
    <h4>Tab 2 Contents</h4>
    <div>Tab 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </Fragment>
);

const tabs = [
  { tabID: 'tab1', tabTitle: 'Tab 1', isDisabled: false, tabPaneBody: tabPaneBody1 },
  { tabID: 'tab2', tabTitle: 'Tab 2', isDisabled: false, tabPaneBody: tabPaneBody2 },
  { tabID: 'tab3', tabTitle: 'Tab 3', isDisabled: true, tabPaneBody: '' }
];

class BasicTabs extends Component {
  
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
            <BootstrapTabs tabs={tabs} />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicTabs;
