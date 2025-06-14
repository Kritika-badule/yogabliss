import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Auth from './components/Auth';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Tutorials from './pages/Tutorials/Tutorials';
import Yoga from './pages/Yoga/Yoga';



import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth />}/>
        <Route path='/home' element={<Home />} />  {/* <-- Added this line for Auth */}
        {/* <Route path='/start' element={<ProtectedRoute><Yoga /></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/tutorials' element={<ProtectedRoute><Tutorials /></ProtectedRoute>} /> */}
          <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  )
}


