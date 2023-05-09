import React, { useState } from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Signup from './components/Form/Signup';
import Login from './components/Form/Login';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Dishes 
import Dishes from './dishes.json';

function App() {

  const [dishes, setDishes] = useState(Dishes)

  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <div>
            <Routes >
              <Route exact path="/" element={(<Home />)} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/menu" element={<Menu dishes={dishes} />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <Footer />

        </Router>

      </>

    </div>
  );
}

export default App;
