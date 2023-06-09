import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = () =>{
    return(

        <Navbar
        className="me-2"
        color="dark"
        dark
        fixed="bottom"
        fluid
      >
        <NavbarBrand href="/">&copy; Kyle | 2023
        </NavbarBrand>
      </Navbar>
    )
}

export default Footer;