import React from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from 'classnames';

const bootstrapListGroupPropTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    flush: PropTypes.bool,
    horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
};

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
              <h4>Tab {index+1} Contents</h4>
              <div>Tab {index+1} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </TabPane>
          ))}
        </TabContent>
      </div>
    )
  }
}

BootstrapTabs.defaultProps = defaultProps;

export default BootstrapTabs;
