import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

const defaultProps = {
  activeTab: 'tab1',
  toggle: () => {},
  tabs: []
};

class BootstrapTabs extends React.Component {

  render() {

    const { toggle, activeTab, tabs } = this.props;

    return (
      <div>
        <Nav tabs>
          {tabs.map((tab) => (
            <NavItem>
              <NavLink disabled={tab.isDisabled} color="success"
                className={classnames({ active: activeTab === tab.tabID })}
                onClick={() => { toggle(tab.tabID); }}
              >
                {tab.tabTitle}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabs.map((tab, index) => (
            <TabPane tabId={tab.tabID}> 
              {tab.tabPaneBody}
            </TabPane>
          ))}
        </TabContent>
      </div>
    )
  }
}

BootstrapTabs.defaultProps = defaultProps;

export default BootstrapTabs;