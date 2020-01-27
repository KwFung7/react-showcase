import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

const propTypes = {
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
  ]),
  trigger: PropTypes.string,
  hideArrow: PropTypes.bool,
  className: PropTypes.string,
  offset: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  placement: 'right',
  trigger: 'click hover focus',
  hideArrow: false,
  className: '',
  offset: 0,
  fade: true,
  isOpen: false
};

class BootstrapTooltips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { isOpen, children, ...otherProps } = this.props;

    return (
      <Tooltip
        isOpen={isOpen || this.state.open}
        toggle={this.toggle}
        {...otherProps}>
        {children}
      </Tooltip>
    )
  }
}

BootstrapTooltips.propTypes = propTypes;
BootstrapTooltips.defaultProps = defaultProps;

export default BootstrapTooltips;
