import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from "reactstrap";

const bootstrapDropdownPropTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func
};

const dropdownTogglePropTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool
};

const defaultProps = {
  isDisabled: false,
  isOpen: false,
  toggle: () => {},
  onClick: () => {},
  value: 'Dropdown'
};

class BootstrapDropdown extends React.Component {

  render() {

    const { isDisabled, isOpen, toggle, onClick, value } = this.props;

    return (
      <Row className="align-items-center">
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <ButtonDropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle caret disabled={isDisabled}>
              {value}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={onClick}>Item 1</DropdownItem>
              <DropdownItem onClick={onClick}>Item 2</DropdownItem>
              <DropdownItem onClick={onClick}>Item 3</DropdownItem>
              <DropdownItem onClick={onClick}>Item 4</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>

      </Row>
    )
  }
}

BootstrapDropdown.propTypes = bootstrapDropdownPropTypes;
DropdownToggle.propTypes = dropdownTogglePropTypes;
BootstrapDropdown.defaultProps = defaultProps;

export default BootstrapDropdown;
