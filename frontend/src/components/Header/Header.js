import logo from '../../assets/svg/logos/logo.png';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useState, useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";



const searchValidation = (e) => {

  let searchVal = document.getElementById('searchField');
  if(searchVal.value == ''){
    alert('Search query cannot be empty');
    searchVal.focus();
    e.preventDefault();
    e.stopPropagation();
  }

  if(!searchVal.value.match(/^[^<>!$'\"/;`%]*$/)){
    alert('Search query cannot contain special characters.')
    searchVal.focus();
    e.preventDefault();
    e.stopPropagation();
  }


  
}

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const userContext = useContext(BookAProContext);
  const categories = userContext.categories;
  return (
    <header id="header" className="header header-sticky-top-lg border-bottom">
      <div className="header-section">
        <div id="logoAndNav" className="container">

          <nav className="navbar navbar-expand-lg">
            <div className="navbar-nav-wrap">

              <Link to="/" className="navbar-brand navbar-nav-wrap-brand" href="#" aria-label="Front">
                <img src={logo} alt="Logo" />
              </Link>

              <div className="navbar-nav-wrap-content">
                <ul className="navbar-nav flex-row align-items-center">

                  <li className="dropdown navbar-nav-item show">
                    <Link to={(userContext.user.role == 1 ? "/providerLogin" : (userContext.user.role == 0 ? "/admin" :"/login"))} id="blogMegaMenu" className="nav-link mx-3 text-primary text-center" href="#!" role="button">Hello,<br />{userContext.user.token ? userContext.user.fname+' '+userContext.user.lname : 'Sign In'}</Link>
                  </li>

                  <li>
                    <Link className="btn btn-soft-dark btn-icon btn-smtransition-3d-hover" to="/cart">
                      <i className="fas fa-lg fa-shopping-cart"></i>
                    </Link>
                  </li>

                </ul>

              </div>

              <button type="button" className="navbar-toggler btn btn-icon btn-sm rounded-circle"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar">
                <span className="navbar-toggler-default">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z" />
                  </svg>
                </span>
                <span className="navbar-toggler-toggled">
                  <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
                  </svg>
                </span>
              </button>

              <div className="collapse navbar-collapse">
                <div className="position-static mx-0 ml-md-auto mt-4 mt-md-0 w-100 w-md-50 mr-4">
                  <div className="border rounded p-0">
                    <div className="form-row">
                      <div className="col-sm mb-2 mb-sm-0">
                        <div className="input-group input-group-merge input-group-borderless">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-search"></i>
                            </div>
                          </div>

                          <input type="text" className="form-control" id="searchField" name="buyAddress" placeholder="Search here..." aria-label="search-field" onChange={(event)=>{
                            setSearchKeyword(event.target.value);
                          }} />
                        </div>
                      </div>

                      <div className="input-group-append">
                        <Link to={"/category/"+searchKeyword} type="submit" className="rounded-0 btn btn-block btn-primary" onClick={searchValidation}>Search</Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </nav>
        </div>
      </div>

      <Navigation />
    </header>
  )
}

export default Header;