import ListingSidebar from './Sidebar';
import productImage from '../../assets/img/300x180/img3.jpg';

import { Link, useParams } from 'react-router-dom'
import { useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";
import React, { useState, useEffect } from "react";
import ServiceList from "./ServiceList"

const Listings = () => {


    //  const {services} = useContext(BookAProContext)
    const [services, setServices] = useState([]);
   const {id} = useParams();

   useEffect(() => {
    // console.log("Entered the useEffect block in Listings.JS");
    fetch("/categories/"+id+"/services")
      .then((res) => res.json())
      .then((services) => {
        console.log(`Services for each service category ${services}`);
        setServices(services);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);




    return (
        <div className="container space-2 space-lg-4">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <ListingSidebar />
                </div>
                
                <div className="col-lg-9 mb-5 mb-lg-0">
                    
                    
                        <ServiceList services={services}/>
                    
                    
                    </div>
            </div>
        </div>
    )

}

export default Listings;