import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./assets/css/theme.min.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.css";

import "bootstrap/dist/js/bootstrap.bundle";


import Header from "./components/Header/Header";
import About from './pages/About';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Home from './pages/Home';
import Login from "./components/Account/Login";
import Registration from "./components/Account/Registration";
import Footer from "./components/Footer/Footer";
import Listings from "./components/Listings/Listings";
import Single from "./components/Listings/Single";
import Checkout from './components/Cart/CartSuccess';
import AllCategories from "./pages/AllCategories";

import BookAProContext from "./components/Context/BookAProContextProvider";

function App() {
  const [categories, setCategories] = useState([]);
  const [bestseller, setBestSeller] = useState([]);
  const [flooring, setFlooring] = useState([]);
  // const [movingStorage, setMovingStorage] = useState([]);
  // const [decoratorsDesigners, setDecoratorsDesigners] = useState([]);
  // const [cleaning, setCleaning] = useState([]);
  // const [services, setServices] = useState([]);
  // const {id} = useParams();
  
  useEffect(() => {
    console.log("Entered the useEffect block");
    fetch("/categories")
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories);
        setCategories(categories);
      })
      .catch((err) => console.log(`Error ${err}`));


      fetch("/bestsellers")
      .then((res) => res.json())
      .then((bestSeller) => {
        console.log(bestSeller);
        setBestSeller(bestSeller);
      })
      .catch((err) => console.log(`Error ${err}`));

      fetch("/categories/6/services")
      .then((res) => res.json())
      .then((flooring) => {
        console.log(flooring);
        setFlooring(flooring);
      })
      .catch((err) => console.log(`Error ${err}`));

      // fetch("/categories/10/services")
      // .then((res) => res.json())
      // .then((moving) => {
      //   console.log(moving);
      //   setMovingStorage(moving);
      // })
      // .catch((err) => console.log(`Error ${err}`));

      // fetch("/categories/4/services")
      // .then((res) => res.json())
      // .then((decorators) => {
      //   console.log(decorators);
      //   setDecoratorsDesigners(decorators);
      // })
      // .catch((err) => console.log(`Error ${err}`));

      // fetch("/categories/2/services")
      // .then((res) => res.json())
      // .then((cleaning) => {
      //   console.log(cleaning);
      //   setCleaning(cleaning);
      // })
      // .catch((err) => console.log(`Error ${err}`));

  }, []);

  return (
    <div id="main-container">
      <BookAProContext.Provider value={{ categories, bestseller, flooring }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/all-categories">
              <AllCategories />
            </Route>
            <Route path="/categories/:id/services">
              <Listings />
            </Route>

            <Route path="/services/:serviceId">
              <Single />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/terms">
              <Terms />
            </Route>

            <Route path="/privacy">
              <Privacy />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>


            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

           

          </Switch>

          <Footer />
        </Router>
      </BookAProContext.Provider>
    </div>
  );
}

export default App;
