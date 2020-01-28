import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Row, Col} from "reactstrap";

const propTypes = {
  tooltipOpen: PropTypes.bool,
  toggle: PropTypes.func
};

const defaultProps = {
  tooltipOpen: false,
  toggle: () => {}
};

class BootstrapTooltips extends React.Component {

  render() {

    const { toggle, tooltipOpen } = this.props;

    return (
      <Row className="align-items-center">
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <div>Tooltips??? <span class="icon-exclamation" id="star" href="#"></span></div>
          <Tooltip placement="auto" target="star" isOpen={tooltipOpen} toggle={toggle}>
            Icon tooltip
          </Tooltip>
        </Col>
      </Row>
    )
  }
}

BootstrapTooltips.propTypes = propTypes;
BootstrapTooltips.defaultProps = defaultProps;

export default BootstrapTooltips;
