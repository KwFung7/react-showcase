import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from "reactstrap";

const propTypes = {
  isDisabled: PropTypes.bool,
  isOpen: PropTypes.bool
};

const defaultProps = {
  isDisabled: false,
  isOpen: false
};

class BootstrapDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      value: 'Dropdown'
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  select = (event) => {
    this.setState({
      value: event.target.innerText
    });
  };

  render() {

    const { isDisabled } = this.props;
    const { isOpen, value } = this.state;

    return (
      <Row className="align-items-center">
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <ButtonDropdown isOpen={isOpen} toggle={this.toggle}>
            <DropdownToggle caret disabled={isDisabled}>
              {value}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.select}>Item 1</DropdownItem>
              <DropdownItem onClick={this.select}>Item 2</DropdownItem>
              <DropdownItem onClick={this.select}>Item 3</DropdownItem>
              <DropdownItem onClick={this.select}>Item 4</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
      </Row>
    )
  }
}

BootstrapDropdown.propTypes = propTypes;
BootstrapDropdown.defaultProps = defaultProps;

export default BootstrapDropdown;
