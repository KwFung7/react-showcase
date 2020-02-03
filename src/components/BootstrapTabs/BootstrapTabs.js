import React from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';

const propTypes = {
  activeTab: PropTypes.string,
  tabs: PropTypes.array.isRequired
};

const defaultProps = {
  activeTab: 'tab1'
};

class BootstrapTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab
    };
  }

  toggle = (tab) => {
    this.setState({
      activeTab: tab
    });
  };

  render() {

    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        <Nav tabs>
          {tabs.map((tab, index) => (
            <NavItem key={index}>
              <NavLink disabled={tab.isDisabled} color="success" 
                aria-selected={activeTab === tab.tabID} aria-controls={tab.tabID + "-content"}
                className={classnames({ active: activeTab === tab.tabID })}
                onClick={() => this.toggle(tab.tabID)}
              >
                {tab.tabTitle}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabs.map((tab) => (
            <TabPane tabId={tab.tabID} id={tab.tabID + "-content"} key={tab.tabID} 
              aria-labelledby={tab.tabID} tabIndex="-1">
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
