import React from 'react'
import productImage from '../../assets/img/300x180/img3.jpg';
import { Link } from 'react-router-dom'
import ServiceItem from "./ServiceItem"
const ServiceList = (props) => {
    return (
        <div>
             {props.services.map((service)=>(<ServiceItem key={service.serviceId} id={service.serviceId} serviceName={service.name} servicePrice={service.pricePerHour} serviceImage={service.image}/>))}
        </div>
    )
}

export default ServiceList
