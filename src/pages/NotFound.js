import React from "react";
import NotFoundImage from '../assets/NotFound.jpeg';
import { NavLink } from "react-router-dom";
import { Button } from 'reactstrap';

import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <img src={NotFoundImage} alt="Not Found" className="background" />
      <div className="content">
        <NavLink className="navHome" to="/">
          <Button className="centerButton customButton">Return Home</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
