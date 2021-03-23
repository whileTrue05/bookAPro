import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';
import './assets/css/theme.min.css';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.css';

import 'bootstrap/dist/js/bootstrap.bundle';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import AllCategories from "./pages/AllCategories";

//components
import Header from './components/Header/Header';
import Login from './components/Account/Login';
import Registration from './components/Account/Registration';
import Footer from './components/Footer/Footer';
import Listings from "./components/Listings/Listings";
import Single from "./components/Listings/Single";
import Checkout from './components/Cart/CartSuccess';



//main function
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

          <Route path="/categories">
            <AllCategories />
          </Route>

          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/product">
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
    </div>
  );
}

export default App;