import productImage from '../../assets/img/300x180/img3.jpg';
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";


const Single = () => {

    const {serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState({});
   
   
   

   useEffect(() => {
       console.log("The serviceID received is: "+serviceId)
    console.log("Entered the useEffect block in Listings.JS");
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
        <div className="container space-2 space-lg-4">
        <div>{serviceDetail.name}</div>
            <div className="row">
                <div className="col-lg-7 mb-7 mb-lg-0">
                    <div className="pr-lg-4">
                        <div className="position-relative">
                            <div  className=" border rounded-lg">
                                <div className="js-slide">
                                    <img className="img-fluid w-100 rounded-lg" src={productImage} alt="Image Description" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="col-lg-5">

                    <div className="mb-5">
                        <h1 className="h2">New Era 9Forty LA Dodgers adjustable cap in black</h1>
                        <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
                    </div>

                    <div className="mb-5">
                        <h2 className="font-size-1 text-body mb-0">Total price:</h2>
                        <span className="text-dark font-size-2 font-weight-bold">$159.99</span>
                        <span className="text-body ml-2"><del>$179.99</del></span>
                    </div>

                    <div className="border rounded-lg py-2 px-3 mb-3">
                        <div className="js-quantity-counter row align-items-center">
                            <div className="col-7">
                                <small className="d-block text-body font-weight-bold">Select quantity</small>
                                <input className="js-result form-control h-auto border-0 rounded-lg p-0" type="text" value="1" />
                            </div>
                            <div className="col-5 text-right">
                                <a className="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#!">
                                    <i className="fas fa-minus"></i>
                                </a>
                                <a className="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#!">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <Link to="/product" type="button" className="btn btn-block btn-primary btn-pill transition-3d-hover"><i className="fas fa-plus"></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Single;