import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BounceLoader  from 'react-spinners/BounceLoader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-950">
        <BounceLoader size={60} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <Router>
      <Navbar Link1="Home" Link2="About" Link3="Contact" Link4="News" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;