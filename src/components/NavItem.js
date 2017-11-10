import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const NavItem = (props) => {
  return (
    <li className='navItem'
        onClick={() => props.updateContent(props.content)}>
      {props.label}
      {props.children}
    </li>
  )
}

export default NavItem;

NavItem.propTypes = {
  updateContent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
