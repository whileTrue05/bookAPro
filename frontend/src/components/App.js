import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../css/App.css';
import '../assets/css/theme.min.css';
import '../assets/vendor/@fortawesome/fontawesome-free/css/all.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Account/Login';
import Registration from './Account/Registration';
import Footer from './Footer/Footer';
import Listings from "./Listings/Listings";
import Single from "./Listings/Single";


function App() {

  return (
    <div id="main-container">
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
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/product">
            <Single />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;