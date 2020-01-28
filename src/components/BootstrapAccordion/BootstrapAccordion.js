import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button } from "reactstrap";

const propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

const defaultProps = {
  isOpen: false,
  toggle: () => {}
};

class BootstrapAccordion extends React.Component {

  render() {

    const { isOpen, toggle, onEntered, onExited } = this.props;
    const buttonProps = {
      id: 'buttonOne',
      color:'link',
      onClick: toggle,
      'aria-expanded': isOpen,
      'aria-controls': 'collapseOne'
    };
    const collapseProps = {
      id: 'collapseOne',
      'aria-expanded': isOpen,
      'aria-labelledby': 'buttonOne',
      isOpen: isOpen,
      onEntered: onEntered,
      onExited: onExited
    };

    return (
      <div>
        <Button {...buttonProps} ><span className={(isOpen ? 'icon-arrow-up' : 'icon-arrow-down') + ' mr-2'} />Toggle</Button>
        <Collapse {...collapseProps}>
          <div>
              Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    )
  }
}

BootstrapAccordion.propTypes = propTypes;
BootstrapAccordion.defaultProps = defaultProps;

export default BootstrapAccordion;
