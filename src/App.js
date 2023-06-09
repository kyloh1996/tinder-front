import React, {useState} from  'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PracticeIndex from './pages/PracticeIndex';
import PracticeShow from './pages/PracticeShow';
import MockData from './MockData';


import './App.css';

function App() {
  // using variables needs a useState for functionality 
  const [practice,setPractice] = useState(MockData)
console.log(practice); // to see the data sent to server

  return (
    // must be JSX syntax
    <div> 
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practiceindex" element={<PracticeIndex practice={practice}/>} />
      <Route path="/practiceshow" element={<PracticeShow />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
