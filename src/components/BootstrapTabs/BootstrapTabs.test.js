import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import BootstrapTabs from './BootstrapTabs';

const tabPaneBody1 = (
  <Fragment>
    <h4>Tab 1 Contents</h4>
    <div>Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </Fragment>
);

const tabs = [
  { tabID: 'tab1', tabTitle: 'Tab 1', isDisabled: false, tabPaneBody: tabPaneBody1 },
  { tabID: 'tab3', tabTitle: 'Tab 3', isDisabled: true, tabPaneBody: '' }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BootstrapTabs tabs={tabs} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
