import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import BootstrapDropdown from '../../../components/BootstrapDropdown';
import BootstrapUncontrolledDropdown from '../../../components/BootstrapUncontrolledDropdown';
import codeUrl from '../../../code-url';

class BasicDropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.items = [
      { key: 'header', title: 'header', isHeader: true, isDivider: false, isDisabled: false},
      { key: 'divider', title: 'divider', isHeader: false, isDivider: true, isDisabled: false },
      { key: 'disabled', title: 'disabled', isHeader: false, isDivider: false, isDisabled: true },
      { key: 'item1', title: 'Item 1', isHeader: false, isDivider: false, isDisabled: false },
      { key: 'item2', title: 'Item 2', isHeader: false, isDivider: false, isDisabled: false },
      { key: 'item3', title: 'Item 3', isHeader: false, isDivider: false, isDisabled: false },
      { key: 'item4', title: 'Item 4', isHeader: false, isDivider: false, isDisabled: false },
    ];
    this.dorpdowns = [
      {title:'primary',direction:'up',color:'primary',size:'lg'},
      {title:'secondary',direction:'left',color:'secondary',size:'sm'},
      {title:'success',direction:'right',color:'success',size:'lg'},
      {title:'info',direction:'up',color:'info',size:'sm'},
      {title:'warning',direction:'left',color:'warning',size:'lg'},
      {title:'danger',direction:'right',color:'danger',size:'sm'},
    ];
    this.state = {
        isOpen: false,
        isDisabled: false,
        value: 'Dropdown',
    };
  }

  toggleDisableMode = () => {
    this.setState({
      isDisabled: !this.state.isDisabled
    });
  };

  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  select(event) {
    this.setState({
        value: event.target.innerText
    });
  }
  
  render() {
    const { isDisabled } = this.state;

    return (
      <div className="animated fadeIn">
        <div className="d-flex justify-content-end mb-3">
          <div className="d-flex align-items-center mr-2">
            <div className="text-black-50">Disabled</div>
            <AppSwitch
              className={'mx-1'}
              variant={'pill'}
              color={'secondary'}
              checked={isDisabled}
              onChange={this.toggleDisableMode} />
          </div>
        </div>
        <Card>
          <CardHeader>
            <strong>Bootstrap Dropdown</strong>
            <div className="card-header-actions">
              <a href={codeUrl.bootstrapDropdown} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapDropdown {...this.state} toggle={this.toggle} onClick={this.select} />
            <div className="mb-3 mt-4"><u>Direction / Size</u></div>
            <BootstrapUncontrolledDropdown {...this.state} items={this.items} dorpdowns={this.dorpdowns} />
          </CardBody>
        </Card>
        
      </div>
    );
  }
}

export default BasicDropdown;
