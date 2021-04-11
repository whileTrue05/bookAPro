import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/App.css";
import "../assets/css/theme.min.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.css";

import "bootstrap/dist/js/bootstrap.bundle";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Account/Login";
import Registration from "./Account/Registration";
import Footer from "./Footer/Footer";
import Listings from "./Listings/Listings";
import Single from "./Listings/Single";

import BookAProContext from "./Context/BookAProContextProvider";

function App() {
  const [categories, setCategories] = useState([]);
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

      // fetch("/categories/"+id+"/services")
      // .then((res) => res.json())
      // .then((services) => {
      //   console.log(`Services for each service category ${services}`);
      //   setServices(services);
      // })
      // .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <div id="main-container">
      <BookAProContext.Provider value={{ categories }}>
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
            <Route path="/categories/:id/services">
              <Listings />
            </Route>

            <Route path="/services/:serviceId">
              <Single />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </BookAProContext.Provider>
    </div>
  );
}

export default App;
