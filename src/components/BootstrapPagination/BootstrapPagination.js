import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const propTypes = {
  activeTab: PropTypes.number,
  size: PropTypes.string,
  'aria-label': PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.node,
    src: PropTypes.string,
    disabled: PropTypes.bool,
    control: PropTypes.object,
    'aria-label': PropTypes.string
  })).isRequired
};

const defaultProps = {
  activeTab: 2,
  size: 'md',
  'aria-label': 'pagination'
};

class BootstrapPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab
    };
  }

  toggle = (tab) => {
    this.setState({
      activeTab: tab
    });
  };

  render() {

    const { items, size, 'aria-label': ariaLabel } = this.props;

    return (
      <Pagination size={size} aria-label={ariaLabel} >
        {
          items.map((item, index) => (
            <PaginationItem
              key={index}
              active={this.state.activeTab === index}
              disabled={item.disabled}
              onClick={() => this.toggle(index)}
            >
              <PaginationLink href={item.src} aria-label={item['aria-label']} {...item.control}>
                {item.content}
              </PaginationLink>
            </PaginationItem>
          ))
        }
      </Pagination>
    )
  }
}

BootstrapPagination.defaultProps = defaultProps;
BootstrapPagination.propTypes = propTypes;

export default BootstrapPagination;
