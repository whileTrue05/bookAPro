import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ServiceList from "../Listings/ServiceList"

const Navigation = () => {

  const [flooring, setFlooring] = useState([]);
  const [movingStorage, setMovingStorage] = useState([]);
  const [decoratorsDesigners, setDecoratorsDesigners] = useState([]);
  const [cleaning, setCleaning] = useState([]);
  useEffect(() => {
    console.log("Entered the useEffect block");
    fetch("/categories/6/services")
      .then((res) => res.json())
      .then((flooring) => {
        console.log(flooring);
        setFlooring(flooring);
      })
      .catch((err) => console.log(`Error ${err}`));

      fetch("/categories/10/services")
      .then((res) => res.json())
      .then((moving) => {
        console.log(moving);
        setMovingStorage(moving);
      })
      .catch((err) => console.log(`Error ${err}`));

      fetch("/categories/4/services")
      .then((res) => res.json())
      .then((decorators) => {
        console.log(decorators);
        setDecoratorsDesigners(decorators);
      })
      .catch((err) => console.log(`Error ${err}`));

      fetch("/categories/2/services")
      .then((res) => res.json())
      .then((cleaning) => {
        console.log(cleaning);
        setCleaning(cleaning);
      })
      .catch((err) => console.log(`Error ${err}`));

  }, []);




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

                          <input type="text" className="form-control" name="buyAddress" placeholder="Search here..." aria-label="Search here..." />
                        </div>
                      </div>

                      <div className="col-sm-auto input-group-flush pr-3">
                        <select id="exampleFormControlSelect1" className="form-control " defaultValue={{label: "All", value: 0}} style={{ border:0, textAlignLast: 'right' }}>
                          <option value="0">All</option>
                          <option>Shirts</option>
                          <option>Jeans</option>
                          <option>Electronics</option>
                          <option>Appliances</option>
                        </select>
                      </div>
                      <div className="input-group-append">
                        <Link to="/listings" type="submit" className="rounded-0 btn btn-block btn-primary">Search</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="container d-md-flex align-items-center">
              
                <Link className="dropdown-nav-link d-block" to="/bestsellers">
                    Bestsellers
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" to="/categories/6/services">
                    Flooring
                   
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block"  to="/categories/10/services">
                    Moving & Storage
                    
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block"  to="/categories/4/services">
                    Decorators & Designers
                    
                </Link>
                <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" to="/categories/2/services">
                    Cleaning
                   
                </Link>
            </div>
        </div>
    );
}

export default Navigation;