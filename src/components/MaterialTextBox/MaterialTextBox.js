import React from 'react';
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class MaterialTextBox extends React.Component {

  render() {
    const { isDisabled, isActive, isElevation, variant, onClick } = this.props;
    const props = {
      disabled: isDisabled,
      disableElevation: !isElevation,
      'aria-pressed': isActive,
      variant,
      onClick
    };

    return (
      <Row className="align-items-center">
        <Col col="6" md="4">
          <TextField id="standard-basic" label="Default" placeholder="Enter text" />
        </Col>
        <Col col="6" md="4">
          <TextField id="standard-basic" label="Default" placeholder="Enter text" disabled/>
        </Col>
        <Col col="6" md="4">
          <TextField
            error
            id="standard-error-helper-text"
            label="Invalid value"
            defaultValue="invalid email"
            helperText="Please input a valid email."
          />
        </Col>
      </Row>
    )
  }
}

export default MaterialTextBox;
