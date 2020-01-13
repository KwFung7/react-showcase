import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import BootstrapButtons from '../../../components/BootstrapButtons';

class BasicButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      isActive: false
    }
  }

  toggleDisableMode = () => {
    this.setState((state) => ({
      isDisabled: !state.isDisabled
    }));
  };

  toggleActiveMode = () => {
    this.setState((state) => ({
      isActive: !state.isActive
    }));
  };

  toggleBoth = () => {
    this.toggleDisableMode();
    this.toggleActiveMode();
  };

  render() {
    const { isDisabled, isActive } = this.state;

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
              onChange={!isDisabled && isActive ? this.toggleBoth : this.toggleDisableMode} />
          </div>
          <div className="d-flex align-items-center">
            <div className="text-black-50">Active</div>
            <AppSwitch
              className={'mx-1'}
              variant={'pill'}
              color={'secondary'}
              checked={isActive}
              onChange={!isActive && isDisabled ? this.toggleBoth : this.toggleActiveMode} />
          </div>
        </div>
        <Card>
          <CardHeader>
            <strong>Bootstrap Buttons</strong>
          </CardHeader>
          <CardBody>
            <BootstrapButtons {...this.state} />
            {reactElementToJSXString(BootstrapButtons(this.state))}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BasicButtons;
