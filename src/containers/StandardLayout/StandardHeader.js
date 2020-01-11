import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import icon from '../../assets/img/brand/icon.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class StandardHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 143, height: 25, alt: 'Accenture Logo' }}
          minimized={{ src: icon, width: 29, height: 20, alt: 'Accenture Icon' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none mr-auto" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

StandardHeader.propTypes = propTypes;
StandardHeader.defaultProps = defaultProps;

export default StandardHeader;
