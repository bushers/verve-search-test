import React, { Component } from 'react';
import './Navbar.css'

class NavItem extends Component {
  render() {
    return (
      <li className='navItem'>
        {this.props.label}
        {this.props.children}
        <div>{this.props.content}</div>
      </li>
    )
  }
}

export default NavItem;
