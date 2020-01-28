import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button } from "reactstrap";

const propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  label: PropTypes.string.isRequired,
  buttonId: PropTypes.string,
  collapseId: PropTypes.string,
  className: PropTypes.string,
  onEntered: PropTypes.func,
  onExited: PropTypes.func
};

const defaultProps = {
  isOpen: false,
  buttonId: 'buttonOne',
  collapseId: 'collapseOne',
  className: '',
  onEntered: () => {},
  onExited: () => {}
};

class BootstrapAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {

    let { isOpen, children, label, buttonId, collapseId, className, onEntered, onExited } = this.props;
    isOpen = isOpen || this.state.isOpen;

    const buttonProps = {
      id: buttonId,
      color: 'link',
      onClick: this.toggle,
      'aria-expanded': isOpen,
      'aria-controls': collapseId
    };
    const collapseProps = {
      id: collapseId,
      'aria-expanded': isOpen,
      'aria-labelledby': buttonId,
      isOpen,
      children,
      className,
      onEntered,
      onExited
    };

    return (
      <div>
        <Button {...buttonProps} ><span className={`${isOpen ? 'icon-arrow-up' : 'icon-arrow-down'} mr-2`} />{label}</Button>
        <Collapse {...collapseProps} />
      </div>
    )
  }
}

BootstrapAccordion.propTypes = propTypes;
BootstrapAccordion.defaultProps = defaultProps;

export default BootstrapAccordion;
