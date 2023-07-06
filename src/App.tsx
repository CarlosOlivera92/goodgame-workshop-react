import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;