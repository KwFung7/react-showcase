import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import BootstrapButtons from '../../../components/BootstrapButtons';
import MaterialButtons from "../../../components/MaterialButtons";
import gistUrl from '../../../gist-url';

class BasicButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    }
  }

  toggleDisableMode = () => {
    this.setState({
      isDisabled: !this.state.isDisabled
    });
  };

  handleBtnClick = () => {
    console.log('Button click event.');
  };

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
            <strong>Bootstrap Buttons</strong>
            <div className="card-header-actions">
              <a href={gistUrl.bootstrapButtons} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Standard</u></div>
            <BootstrapButtons {...this.state} onClick={this.handleBtnClick} />
            <div className="mb-3 mt-4"><u>Outline</u></div>
            <BootstrapButtons {...this.state} isOutline={true} onClick={this.handleBtnClick} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Material-UI Buttons</strong>
            <div className="card-header-actions">
              <a href={gistUrl.materialButtons} rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">Source Code <i className="icon-arrow-right"></i></small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3"><u>Contained</u></div>
            <MaterialButtons {...this.state} variant="contained" onClick={this.handleBtnClick} />
            <div className="mb-3 mt-4"><u>Outline</u></div>
            <MaterialButtons {...this.state} variant="outlined" onClick={this.handleBtnClick} />
            <div className="mb-3 mt-4"><u>No Elevation</u></div>
            <MaterialButtons {...this.state} variant="contained" isElevation={false} onClick={this.handleBtnClick} />
            <div className="mb-3 mt-4"><u>Text Button</u></div>
            <MaterialButtons {...this.state} onClick={this.handleBtnClick} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BasicButtons;
