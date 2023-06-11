import React from 'react';
import { Link } from "react-router-dom";

import bg from '../assets/bg.jpeg'

const bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "90vh",
    marginTop:'5vh'
};

const titleStyle = {
    color: 'Black',
    fontSize: '64px',
    textAlign: 'center',
    padding: '50px'
  };

  const buttonStyle = {
    fontFamily: "'BeaufortforLOL-Italic', sans-serif",
    fontSize: "1.5rem",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid black",
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: "10em"
  };

const Home = () =>{
    return(
        <div style={bgStyle}>
            <h1 className="homepage-title" style={titleStyle}>
        Welcome to League of Legends Tinder
      </h1>
      <Link to="/practiceindex">
        <button className="meet-champions-button" style={buttonStyle}>
          Meet the Champions
        </button>
      </Link>
    </div>
    )
}

export default Home;