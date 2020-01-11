import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class StandardFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>Copyright &copy; 2020 Accenture</span>
        <span className="ml-auto">Powered by <a href="https://www.accenture.com/hk-en">Accenture Technology</a></span>
      </React.Fragment>
    );
  }
}

StandardFooter.propTypes = propTypes;
StandardFooter.defaultProps = defaultProps;

export default StandardFooter;
