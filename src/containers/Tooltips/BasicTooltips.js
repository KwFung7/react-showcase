import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BootstrapTooltips from '../../components/BootstrapTooltips';
import codeUrl from '../../code-url';
import {AppSwitch} from "@coreui/react";

const items = [
  { target: 'text-tooltips-top', placement: 'top', content: 'Top tooltips' },
  { target: 'text-tooltips-right', placement: 'right', content: 'Right tooltips' },
  { target: 'text-tooltips-bottom', placement: 'bottom', content: 'Bottom tooltips' }
];

class BasicTooltips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="animated fadeIn">
        <div className="d-flex justify-content-end mb-3">
          <div className="d-flex align-items-center mr-2">
            <div className="text-black-50">Expanded</div>
            <AppSwitch
              className={'mx-1'}
              variant={'pill'}
              color={'secondary'}
              checked={isOpen}
              onChange={this.toggle} />
          </div>
        </div>
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
            <div className="mb-3"><u>Text</u></div>
            <div>Below text demonstrates basic tooltips within text:</div>
            <ul>
              {
                items.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="text-primary" id={item.target}><u>{item.content}</u></span>
                      <BootstrapTooltips target={item.target} placement={item.placement} {...this.state}>{item.content}</BootstrapTooltips>
                    </li>
                  )
                })
              }
            </ul>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default BasicTooltips;
