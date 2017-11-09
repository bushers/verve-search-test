import React, { Component } from 'react';
import NavItem from './NavItem';
import './Navbar.css';

class Navbar extends Component {
  renderNavItems(data) {
    const children = items => {
      if (items) {
        return <ul className='navList'>{this.renderNavItems(items)}</ul>
      }
    }
    return data.map((item, i) => {
      return <NavItem key={item.key}
                      label={item.label}
                      content={item.content}>
               {children(item.child)}
             </NavItem>
    });
  }

  render() {
    return (
      <nav>
        <ul className='navList'>
          {this.renderNavItems(this.props.navData)}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
