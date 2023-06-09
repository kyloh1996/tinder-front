import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <Navbar className="me" 
    color="secondary" 
    dark
    fixed="top"
    fluid
    >
      <NavbarBrand href="/">Practice
       </NavbarBrand>
    </Navbar>
  );
};

export default Header;
