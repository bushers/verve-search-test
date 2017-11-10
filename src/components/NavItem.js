import React from 'react';
import './Navbar.css';

const NavItem = (props) => {
  return (
    <li className='navItem'
        onClick={props.toggleContent}>
      {props.label}
      {props.children}
      {props.showContent && (
        <span className="content">{props.content}</span>
      )}
    </li>
  )
}

export default NavItem;
