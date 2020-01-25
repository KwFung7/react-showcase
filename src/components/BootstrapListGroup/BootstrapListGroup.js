import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from "reactstrap";

const propTypes = {
  isFlush: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isLink: PropTypes.bool,
  items: PropTypes.array.isRequired
};

const defaultProps = {
  isFlush: false,
  isHorizontal: false,
  isLink: false
};

class BootstrapListGroup extends React.Component {

  render() {

    const { isHorizontal, isFlush, items, isLink } = this.props;

    return (
      <ListGroup flush={isFlush} horizontal={isHorizontal}>
        {items.map((item) => (
          <ListGroupItem key={item.key} color={item.color} tag={isLink ? 'a' : 'li'} href={isLink ? item.link : ''}
            active={item.isActive} action={item.isAction} disabled={item.isDisabled}>
            {item.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

BootstrapListGroup.propTypes = propTypes;
BootstrapListGroup.defaultProps = defaultProps;

export default BootstrapListGroup;
