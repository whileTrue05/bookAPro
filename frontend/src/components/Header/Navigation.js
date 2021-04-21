import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import ServiceList from "../Listings/ServiceList"
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

const Navigation = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const userContext = useContext(BookAProContext);
  const categories = userContext.categories;


    return (
        <div id="navBar" className="hide collapse d-md-block bg-white pb-3">
            <div className="container d-md-none">
            <div className="position-static mx-0 ml-md-auto my-4 mt-md-0 w-100 w-md-50 mr-4">
                  <div className="border rounded p-0">
                    <div className="form-row align-items-center flex-nowrap">
                      <div className="col-sm">
                        <div className="input-group input-group-merge input-group-borderless">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-search"></i>
                            </div>
                          </div>

                          <input type="text" className="form-control" id="searchField" name="buyAddress" placeholder="Search here..." aria-label="Search here..." onChange={(event)=>{
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
            <div className="container d-md-flex align-items-center">

                <Link className="dropdown-nav-link d-block" href="#!" to="/category/bestsellers">
                    Bestsellers
                </Link>

                {categories.map((item, index) => {
                  if(index <= 4){
                    
                    return (
                      <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to={"/category/"+item.categoryId}>
                        {item.name}
                      </Link>
                    )
                  }
                })}

                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/category/all">
                    All
                </Link>
              
                
            </div>
        </div>
    );
}

export default Navigation;