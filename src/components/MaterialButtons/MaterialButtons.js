import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from "reactstrap";
import Button from '@material-ui/core/Button';

const propTypes = {
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  isElevation: PropTypes.bool,
  variant: PropTypes.string
};

const defaultProps = {
  isDisabled: false,
  isActive: false,
  isElevation: true,
  variant: "text"
};

class MaterialButtons extends React.Component {

  render() {
    const { isDisabled, isActive, isElevation, variant } = this.props;
    const props = {
      disabled: isDisabled,
      disableElevation: !isElevation,
      'aria-pressed': isActive,
      variant
    };

    return (
      <Row className="align-items-center">
        <Col className="mb-3 mb-xl-0 col-auto">
          <Button {...props}>Default</Button>
        </Col>
        <Col className="mb-3 mb-xl-0 col-auto">
          <Button color="primary" {...props}>
            Primary
          </Button>
        </Col>
        <Col className="mb-3 mb-xl-0 col-auto">
          <Button color="secondary" {...props}>
            Secondary
          </Button>
        </Col>
      </Row>
    )
  }
}

MaterialButtons.propTypes = propTypes;
MaterialButtons.defaultProps = defaultProps;

export default MaterialButtons;
