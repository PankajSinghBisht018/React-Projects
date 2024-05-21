import Navbar from './components/Navbar'
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
function App() {


  return (
    <>
  
  <Router>
    <Navbar Link1="Home" Link2="Products" Link3="Categories" Link4="About"  Link5="Contact"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
