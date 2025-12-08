import React from 'react';
import './styles.css';

import { CartProvider } from "./context/CartContext";

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Stats from './Components/Stats';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Carrinho from './pages/Carrinho';
import Conta from './pages/Conta';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
    <Router>

      
      <Header />

      <Routes>

      
        <Route 
          path="/" 
          element={
            <div className="App">
              <Hero />
              <About />
              <Stats />
              <Contact />
              <Footer />
            </div>
          }
        />

       
        <Route path="/carrinho" element={<Carrinho />} />
         <Route path="/conta" element={<Conta />} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

