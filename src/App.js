import React from 'react';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import FacebookIcon from '@mui/icons-material/Facebook';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <div>
            <Routes >
              <Route exact path="/" element={(<><Home /><MenuComponent /></>)} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>

      </>


    </div>
  );
}

export default App;
