import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct import
import Navbar from './components/Navbar';
import FormValue from './components/FormValue';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />  {/* Navbar is placed outside of Routes */}
        <Routes>
          <Route path="/" element={<FormValue />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
