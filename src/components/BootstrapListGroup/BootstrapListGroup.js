import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem} from "reactstrap";

const bootstrapListGroupPropTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    flush: PropTypes.bool,
    horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
};

const defaultProps = {
  isFlush: false,
  isHorizontal: false,
  isLink: false,
  items: []
};

class BootstrapListGroup extends React.Component {

  render() {

    const { isHorizontal, isFlush, items, isLink } = this.props;

    return (
      <ListGroup flush={isFlush} horizontal={isHorizontal}>
        {items.map((item) => (
          <ListGroupItem key={item.key} color={item.color} tag={isLink?'a':'li'} href={isLink?item.link:''}
            active={item.isActive} action={item.isAction} disabled={item.isDisabled}>
            {item.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

ListGroup.propTypes = bootstrapListGroupPropTypes;
BootstrapListGroup.defaultProps = defaultProps;

export default BootstrapListGroup;
