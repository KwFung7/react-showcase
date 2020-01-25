import React from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

const propTypes = {
  activeTab: PropTypes.string,
  toggle: PropTypes.func,
  tabs: PropTypes.array.isRequired
};

const defaultProps = {
  activeTab: 'tab1',
  toggle: () => {}
};

class BootstrapTabs extends React.Component {

  render() {

    const { toggle, activeTab, tabs } = this.props;

    return (
      <div>
        <Nav tabs>
          {tabs.map((tab, index) => (
            <NavItem key={index}>
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
          {tabs.map((tab) => (
            <TabPane tabId={tab.tabID} key={tab.tabID}>
              {tab.tabPaneBody}
            </TabPane>
          ))}
        </TabContent>
      </div>
    )
  }
}

BootstrapTabs.propTypes = propTypes;
BootstrapTabs.defaultProps = defaultProps;

export default BootstrapTabs;
