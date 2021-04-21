import productImage from '../../assets/img/300x180/img3.jpg';
import { Link, useParams } from 'react-router-dom'
import BookAProContext from "../Context/BookAProContextProvider";
import React, { useState, useEffect, useContext } from "react";
import DateTimePicker from 'react-datetime-picker'

const SingleServiceDetail = (props) => {

    const [value, onChange] = useState(new Date());
    const context = useContext(BookAProContext);


    const addItem = (e) =>{
        let newPrice = parseFloat(context.cartTotal) + parseFloat(props.servicePrice);
        context.setCartItems(props);
        context.setCartTotal(newPrice);
    }

    return (
        <div className="container space-0 space-lg-4">
        
            <div className="row">
                <div className="col-lg-7 mb-7 mb-lg-0">
                    <div className="pr-lg-4">
                        <div className="position-relative">
                            <div  className=" border rounded-lg">
                                <div className="js-slide">
                                    <img style={{maxHeight: '400px', minHeight: '400px', objectFit:'cover'}} className="img-fluid w-100 rounded-lg" src={props.serviceImage} alt="Image Description" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="col-lg-5">

                    <div className="mb-5">
                        <h1 className="h2">{props.serviceName}</h1>
                        <p>{props.serviceDescription}</p>
                    </div>

                    <div className="mb-5">
                        <h2 className="font-size-1 text-body mb-0">Price/Hour:</h2>
                        <span className="text-dark font-size-2 font-weight-bold">${props.servicePrice}</span>
                        <span className="text-body ml-2"><del>$179.99</del></span>
                    </div>

                    <div className="py-2 px-3 mb-3">
                        <div className="js-quantity-counter row align-items-center">
                            <div className="col">
                                <small className="d-block text-body font-weight-bold">Select Date & Time:</small>
                                {/* <input className="js-result form-control h-auto border-0 rounded-lg p-0" type="text" value="1" /> */}
                                <div>
                                    <DateTimePicker onChange={onChange} value={value} format="y-MM-dd h:mm:ss a" />
                                </div>
                            </div>
                            {/* <div className="col-5 text-right">
                                <a className="js-minus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#!">
                                    <i className="fas fa-minus"></i>
                                </a>
                                <a className="js-plus btn btn-xs btn-icon btn-outline-secondary rounded-circle" href="#!">
                                    <i className="fas fa-plus"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Link to="/cart" onClick={addItem} type="button" className="btn btn-block btn-primary btn-pill transition-3d-hover"><i className="fas fa-plus"></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleServiceDetail
