import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from "reactstrap";

const bootstrapDropdownPropTypes = {
  isDisabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired
};

const defaultProps = {
  isDisabled: false,
  isOpen: false,
  toggle: () => {},
  onClick: () => {}
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
BootstrapDropdown.defaultProps = defaultProps;

export default BootstrapDropdown;
