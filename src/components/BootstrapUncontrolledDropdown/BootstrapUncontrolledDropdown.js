import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from "reactstrap";

const propTypes = {
  isDisabled: PropTypes.bool,
  dropdowns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired
};

const defaultProps = {
  isDisabled: false
};

class BootstrapUncontrolledDropdown extends React.Component {

  render() {
    const { isDisabled, dropdowns, items } = this.props;

    return (
      <Row className="align-items-center">
      {dropdowns.map(
        variant => (
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0" key={variant.title} >
            <UncontrolledDropdown direction={variant.direction}>
              <DropdownToggle caret size={variant.size} color={variant.color} disabled={isDisabled} >
                {variant.title}
              </DropdownToggle>
              <DropdownMenu>
                {items.map((item) => (
                  <DropdownItem key={item.key} header={item.isHeader} divider={item.isDivider} disabled={item.isDisabled}>
                    {item.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        )
      )}
      </Row>
    )
  }
}

BootstrapUncontrolledDropdown.propTypes = propTypes;
BootstrapUncontrolledDropdown.defaultProps = defaultProps;

export default BootstrapUncontrolledDropdown;
