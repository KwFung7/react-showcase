import React from 'react';
import { UncontrolledTooltip, Button, Col, Row } from "reactstrap";

const defaultProps = {
  items: []
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

BootstrapUncontrolledTooltip.defaultProps = defaultProps;

export default BootstrapUncontrolledTooltip;
