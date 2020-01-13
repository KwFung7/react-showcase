import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from "reactstrap";

const propTypes = {
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool
};

const defaultProps = {
  isDisabled: false,
  isActive: false
};

function BootstrapButtons({ isDisabled, isActive }) {
  const props = {
    disabled: isDisabled,
    active: isActive,
    ariaPressed: isActive
  };

  return (
    <Row className="align-items-center">
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="primary" {...props}>Primary</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="secondary" {...props}>Secondary</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="success" {...props}>Success</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="warning" {...props}>Warning</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="danger" {...props}>Danger</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="info" {...props}>Info</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="light" {...props}>Light</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="dark" {...props}>Dark</Button>
      </Col>
      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="link" {...props}>Link</Button>
      </Col>
    </Row>
  )
}

BootstrapButtons.propTypes = propTypes;
BootstrapButtons.defaultProps = defaultProps;

export default BootstrapButtons;

