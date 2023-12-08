// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Cadastro from './componets/Cadastro';
import './App.css'
import Navbar from './componets/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastre-se" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
