import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapTooltips from '../../components/BootstrapTooltips';
import BootstrapUncontrolledTooltip from '../../components/BootstrapUncontrolledTooltip';
import codeUrl from '../../code-url';

const tooltipText1 = (
  <Fragment>
    <h4>Tooltip 1 Contents</h4>
    <div>TooltipTab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </Fragment>
);

const items = [
  { targetID: 'tooltip1', buttonText: 'Tooltip auto', placement: 'auto', autohide: true, tooltipText: tooltipText1},
  { targetID: 'tooltip2', buttonText: 'Tooltip top', placement: 'top', autohide: true, tooltipText: 'Tooltip text'},
  { targetID: 'tooltip3', buttonText: 'Tooltip right', placement: 'right', autohide: false, tooltipText: 'Tooltip text'},
  { targetID: 'tooltip4', buttonText: 'Tooltip bottom', placement: 'bottom', autohide: false, tooltipText: 'Tooltip text'},
  { targetID: 'tooltip5', buttonText: 'Tooltip left', placement: 'left', autohide: true, tooltipText: 'Tooltip text'}
];


class BasicTooltips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle = () => {
      this.setState({
          tooltipOpen: !this.state.tooltipOpen
      });
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Bootstrap Tooltips</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapTooltips} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapTooltips {...this.state} toggle={this.toggle}/>
            <div className="mb-3 mt-4"><u>Uncontrolled Tooltip</u></div>
            <BootstrapUncontrolledTooltip {...this.state} items={items} />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicTooltips;
