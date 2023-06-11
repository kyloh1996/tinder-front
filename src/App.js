import React, {useState} from  'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import PracticeIndex from './pages/PracticeIndex';
import PracticeShow from './pages/PracticeShow';
import PracticeNew from './pages/PracticeNew';
import PracticeEdit from './pages/PracticeEdit';


import MockData from './MockData';


import './App.css';

function App() {
// using variables needs a useState for functionality
  // eslint-disable-next-line no-unused-vars
    const [practice, setPractice] = useState(MockData);
console.log(practice); // to see the data sent to server

  return (
    // must be JSX syntax
    <div> 
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practiceindex" element={<PracticeIndex practice={practice} />} />
      <Route path="/practiceshow/:id" element={<PracticeShow practice={practice} />} />
      <Route path="/practicenew" element={<PracticeNew practice={practice} />} />
      <Route path="/practice/:id/edit" element={<PracticeEdit practice={practice} setPractice={setPractice} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
