import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip, Button, Col, Row } from "reactstrap";

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    targetID: PropTypes.string,
    buttonText: PropTypes.string,
    tooltipText: PropTypes.string,
    placement: PropTypes.oneOf([
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
    ])
  })).isRequired
};

class BootstrapUncontrolledTooltip extends React.Component {

  render() {
    const { items } = this.props;

    return (
      <Row className="align-items-center">
      {items.map(
        variant => (
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0" key={variant.targetID} >
            <Button className="mr-1" id={variant.targetID}>
              {variant.buttonText}
            </Button>
            <UncontrolledTooltip placement={variant.placement} target={variant.targetID}>
              {variant.tooltipText}
            </UncontrolledTooltip>
          </Col>
        )
      )}
      </Row>
    )
  }
}

BootstrapUncontrolledTooltip.propTypes = propTypes;

export default BootstrapUncontrolledTooltip;
