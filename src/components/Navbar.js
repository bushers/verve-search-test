import React from 'react';
import NavItem from './NavItem';
import './Navbar.css';

const Navbar = (props) => {

  const renderNavItems = (data) => {
    const children = items => {
      if (items) {
        return <ul>{renderNavItems(items)}</ul>
      }
    }
    return data.map((item, i) => {
      return <NavItem key={item.key}
                      label={item.label}
                      content={item.content}
                      toggleContent={props.toggleContent}
                      showContent={props.showContent}>
               {children(item.child)}
             </NavItem>
    });
  }

  return (
    <nav>
      <ul className='parentContainer'>
        {renderNavItems(props.navData)}
      </ul>
    </nav>
  )
}

export default Navbar;
