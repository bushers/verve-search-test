import React from 'react';
import PropTypes from 'prop-types';
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
                      updateContent={props.updateContent}>
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

Navbar.propTypes = {
  navData: PropTypes.array.isRequired,
  updateContent: PropTypes.func.isRequired
}
