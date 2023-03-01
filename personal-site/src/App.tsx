import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import { CVPage } from './components/cv-page/CVPage';
import { Footer } from './components/footer/footer';
import { Home } from './components/homepage/homepage';
import { Navbar } from './components/navbar/navbar';

const SiteRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cv" element={<CVPage />}/>
    </Routes>
  );
};

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className='site'>
      <Navbar />
      <main className='page-content'>
        <SiteRoutes />
      </main>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
