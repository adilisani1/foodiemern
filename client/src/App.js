import React, { useEffect, useState } from 'react';
import Home from "./pages/Home/Home";
import DishDetails from './components/DishDetails/DishDetails';
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Signup from './components/Form/Signup';
import Login from './components/Form/Login';
import axios from 'axios';

import Footer from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom';

//Dishes 
// import Dishes from './dishes.json';
import Checkout from './pages/Checkout/Checkout';


function App() {
  const [dishes, setDishes] = useState([]);

  //Api
  const fetchData = async () => {
    try {
      const response = await axios.get('https://foodiemern-front-end.vercel.app/api/dishes');
      setDishes(response.data);
      console.log(response.data)

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <>

        <Navbar />
        <div>

          <Routes >
            <Route exact path="/" element={<Home dishes={dishes} />} />
            <Route exact path="/menu/:id" element={<DishDetails singleDish={dishes} headerColor="#4d38b2" />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/menu" element={<Menu dishes={dishes} />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/:id" element={<DishDetails singleDish={dishes} headerColor="#4d38b2" />} />

          </Routes>
        </div>
        <Footer />



      </>

    </div>
  );
}

export default App;
