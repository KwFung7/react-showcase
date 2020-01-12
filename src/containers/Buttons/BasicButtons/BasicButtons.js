import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

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
            {
              !isDisabled && !isActive &&
              <Row className="align-items-center">
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="primary">Primary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="secondary">Secondary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="success">Success</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="warning">Warning</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="danger">Danger</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="info">Info</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="light">Light</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="dark">Dark</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="link">Link</Button>
                </Col>
              </Row>
            }
            {
              isActive &&
              <Row className="align-items-center">
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="primary" aria-pressed="true">Primary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="secondary" aria-pressed="true">Secondary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="success" aria-pressed="true">Success</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="warning" aria-pressed="true">Warning</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="danger" aria-pressed="true">Danger</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="info" aria-pressed="true">Info</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="light" aria-pressed="true">Light</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="dark" aria-pressed="true">Dark</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button active block color="link" aria-pressed="true">Link</Button>
                </Col>
              </Row>
            }
            {
              isDisabled &&
              <Row className="align-items-center">
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="primary" disabled>Primary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="secondary" disabled>Secondary</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="success" disabled>Success</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="warning" disabled>Warning</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="danger" disabled>Danger</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="info" disabled>Info</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="light" disabled>Light</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="dark" disabled>Dark</Button>
                </Col>
                <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                  <Button block color="link" disabled>Link</Button>
                </Col>
              </Row>
            }
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BasicButtons;
