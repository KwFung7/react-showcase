import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, FormGroup, Label, Input, FormText } from "reactstrap";

class BootstrapTextBox extends React.Component {

  render() {
    const { isDisabled, isActive, isOutline, onClick } = this.props;
    const props = {
      disabled: isDisabled,
      active: isActive,
      outline: isOutline,
      'aria-pressed': isActive,
      onClick
    };

    return (
      <Row className="align-items-center">
        <Col col="6" md="4">
          <FormGroup>
            <Label for="default">Default</Label>
            <Input type="text" id="default" placeholder="Enter text" />
          </FormGroup>
        </Col>
        <Col col="6" md="4">
          <FormGroup disabled>
            <Label for="readonly">Read-only</Label>
            <Input type="text" id="readonly" placeholder="Enter text" disabled/>
          </FormGroup>
        </Col>
        <Col col="6" md="4">
          <FormGroup disabled>
            <Label for="readonly-plain">Read-only Plain Text</Label>
            <Input type="text" id="readonly-plain" placeholder="Enter text" disabled plaintext/>
          </FormGroup>
        </Col>
        <Col col="6" md="4">
          <FormGroup>
            <Label for="invalid">Invalid Input</Label>
            <Input placeholder="Invalid email" invalid />
            <FormText>Please input a valid email.</FormText>
          </FormGroup>
        </Col>
        <Col col="6" md="4">
          <FormGroup>
            <Label for="invalid">Valid value</Label>
            <Input placeholder="example@example.com" valid />
            <FormText>Great!.</FormText>
          </FormGroup>
        </Col>
        <Col col="6" md="4">
          <FormGroup>
            <Label for="default">Large</Label>
            <Input type="text" id="default" placeholder="Enter text" bsSize="lg"/>
          </FormGroup>
        </Col>
      </Row>
    )
  }
}

export default BootstrapTextBox;
