import productImage from '../../assets/img/300x180/img3.jpg';
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import SingleServiceDetails from './SingleServiceDetail'

const Single = () => {

    const {serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
   
   
   

   useEffect(() => {
       console.log("The serviceID received is: "+serviceId)
    console.log("Entered the useEffect block in SINGLE.JS");
    fetch("/services/"+serviceId)
      .then((res) => res.json())
      .then((serviceDetails) => {
        console.log(serviceDetails);
        setServiceDetail(serviceDetails)
        
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);


  


    return (
        <>
            {serviceDetail.map((serviceDetail)=>(<SingleServiceDetails key={serviceDetail.serviceId} id={serviceDetail.serviceId} serviceName={serviceDetail.name} servicePrice={serviceDetail.pricePerHour} serviceDescription={serviceDetail.description} serviceImage={serviceDetail.image}/>))}
        </>
    )
}

export default Single;