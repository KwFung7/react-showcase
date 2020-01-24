import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row } from "reactstrap";

const defaultProps = {
  isDisabled: false,
  dorpdowns: [],
  items: []
};

class BootstrapUncontrolledDropdown extends React.Component {

  render() {
    const { isDisabled, dorpdowns, items } = this.props;

    return (
      <Row className="align-items-center">
      {dorpdowns.map(
        variant => (
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0" key={variant.title} >
            <UncontrolledDropdown direction={variant.direction}>
              <DropdownToggle caret size={variant.size} color={variant.color} disabled={isDisabled} >
                {variant.title}
              </DropdownToggle>
              <DropdownMenu>
                {items.map((item) => (
                  <DropdownItem key={item.key} header={item.isHeader}  divider={item.isDivider}  disabled={item.isDisabled}>
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

BootstrapUncontrolledDropdown.defaultProps = defaultProps;

export default BootstrapUncontrolledDropdown;
