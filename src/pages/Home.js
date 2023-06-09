import React from 'react';
import bg from '../assets/bg.jpeg'

const bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "90vh",
    marginTop:'5vh'
};

const h2Style = {
    color: 'Black',
    fontSize: '32px',
    textAlign: 'center',
    padding: '50px'
  };

const Home = () =>{
    return(
        <div style={bgStyle}>
            <h2 style={h2Style}> Home Page </h2>
        </div>
    )
}

export default Home;