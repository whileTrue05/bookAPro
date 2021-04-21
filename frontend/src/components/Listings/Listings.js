import ListingSidebar from './Sidebar';
import productImage from '../../assets/img/300x180/img3.jpg';

import { Link, useParams } from 'react-router-dom'
import { useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";
import React, { useState } from "react";
import ServiceItem from "./ServiceItem"


const Listings = () => {


    const userContext = useContext(BookAProContext);
    let services = userContext.services;
    const { cat } = useParams();

    if(isNaN(cat)){
        if(cat == 'bestsellers'){
            services = services.filter((object)=> {return object.bestseller === 'Y'});
        }else if(cat == 'all'){
            services = services;
        }else{
            services = services.filter((object)=> {return object.name.toLowerCase().indexOf(cat.toLowerCase()) > -1});
        }
    }else{

        services = services.filter((object)=> {return object.categoryId == cat});
    }



    return (
        <div className="container space-0 space-lg-4">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <ListingSidebar />
                </div>

                <div className="col-lg-9 mb-5 mb-lg-0">

                    <div className="row">
                            {services.map((service)=>(<ServiceItem key={service.serviceId} serviceData={service}/>))}
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Listings;