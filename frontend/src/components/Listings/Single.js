import productImage from '../../assets/img/300x180/img3.jpg';
import { Link, useParams } from 'react-router-dom'
import BookAProContext from "../Context/BookAProContextProvider";
import React, { useState, useEffect, useContext } from "react";
import SingleServiceDetails from './SingleServiceDetail'

const Single = () => {

    const {serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
   
   
   
  let {services} = useContext(BookAProContext);
  services = services.filter((object)=> {return object.serviceId == serviceId});
  
  
   useEffect(() => {
        setServiceDetail(services)
        
  }, [services]);


  


    return (
        <>
            {serviceDetail.map((serviceDetail)=>(<SingleServiceDetails key={serviceDetail.serviceId} id={serviceDetail.serviceId} serviceName={serviceDetail.name} servicePrice={serviceDetail.pricePerHour} serviceDescription={serviceDetail.description} serviceImage={serviceDetail.image} providerId={serviceDetail.userId}/>))}
        </>
    )
}

export default Single;