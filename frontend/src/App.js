import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from "react-router-dom";
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
import ProviderLogin from "./components/Account/ProviderLogin";
import AdminLogin from "./components/Account/AdminLogin";
import Registration from "./components/Account/Registration";
import Footer from "./components/Footer/Footer";
import Listings from "./components/Listings/Listings";
import Single from "./components/Listings/Single";
import Checkout from './components/Cart/CartSuccess';
import AllCategories from "./pages/AllCategories";

import BookAProContext from "./components/Context/BookAProContextProvider";
import ScrollToTop from './components/Context/ScrollToTop';
import User from "./components/Account/User";
import Provider from "./components/Account/Provider";
import Admin from "./components/Account/Admin";


function App() {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [bestseller, setBestSeller] = useState([]);
  const [cartItems, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // const [movingStorage, setMovingStorage] = useState([]);
  // const [decoratorsDesigners, setDecoratorsDesigners] = useState([]);
  // const [cleaning, setCleaning] = useState([]);
  // const [services, setServices] = useState([]);
  // const {id} = useParams();
  
  useEffect(() => {
    fetch("https://whiletrue-bookapro.herokuapp.com:8878/categories")
    .then((res) => res.json())
    .then((categories) => {
      setCategories(categories);
    })
    .catch((err) => console.log(`Error ${err}`));


    fetch("https://whiletrue-bookapro.herokuapp.com:8878/allServices")
    .then((res) => res.json())
    .then((response) => {
      setServices(response);
      const bestsellersFilter = response.filter(obj => {return obj.bestseller === 'Y'});
      setBestSeller(bestsellersFilter);
    })
    .catch((err) => console.log(`Error ${err}`));

    const existingToken = localStorage.getItem('token');

    existingTokenCheck(existingToken);

    const localCartItems = JSON.parse(localStorage.getItem("cartitems") || "[]");
    let totalAmount = 0; 
    localCartItems.forEach((item, index) => {
        totalAmount = totalAmount + (parseInt(item.servicePrice));
    });

    setCartTotal(parseFloat(cartTotal) + totalAmount);
    setCart(localCartItems);


  }, []);

  const existingTokenCheck = (existingToken) => {
    if(existingToken){
      fetch('https://whiletrue-bookapro.herokuapp.com:8878/verifyToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: existingToken})
      }).then(function(res) {
        return res.json();
      }).then(function(data){
        if(data.result){
          data.user.token = existingToken;
          setUser(data.user);
          fetch("https://whiletrue-bookapro.herokuapp.com:8878/userData?userId="+data.user.userId)
          .then((res) => res.json())
          .then((response) => {
            setUserData(response);
      
          })
          .catch((err) => console.log(`Error ${err}`));
        }
      });
    }
  }

  const setCartItems = (item) => {
    let setCartItems = []
    if(cartItems.length){
      setCartItems = cartItems;
    }

    setCartItems.push(item);

    
    localStorage.setItem("cartitems", JSON.stringify(setCartItems))
    setCart(setCartItems);
  }

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
  }

  return (
    <div id="main-container">
      <BookAProContext.Provider value={{ categories, bestseller, services, user, setUser, userData, cartItems, setCartItems, cartTotal, setCartTotal, clearCart}}>
        <Router>
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/adminDashboard">
                {(user.token && user.role == 0)
                ? <Admin />
                : <Redirect to="/admin" />
                }
              </Route>
              <Route path="/providerDashboard">
                {(user.token && user.role == 1)
                ? <Provider />
                : <Redirect to="/providerLogin" />
                }
              </Route>
              <Route path="/dashboard">
                {user.token && user.role == 2
                ? <User />
                : <Redirect to="/login" />
                }
              </Route>
              <Route path="/login">
                {(user.token && user.role == 2)
                ? <Redirect to="/dashboard" />
                : <Login />
                }
              </Route>
              <Route path="/providerLogin">
                {(user.token && user.role == 1)
                ? <Redirect to="/providerDashboard" />
                : <ProviderLogin />
                }
              </Route>
              <Route path="/admin">
                {(user.token && user.role == 0)
                ? <Redirect to="/adminDashboard" />
                : <AdminLogin />
                }
              </Route>
              <Route path="/registration">
                {(user.token && user.role == 2)
                ? <Redirect to="/dashboard" />
                : <Registration />
                }
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

              <Route path="/category/:cat">
                <Listings />
              </Route>

            </Switch>
          </ScrollToTop>
          <Footer />
        </Router>
      </BookAProContext.Provider>
    </div>
  );
}

export default App;
