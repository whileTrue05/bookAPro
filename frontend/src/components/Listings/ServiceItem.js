import React from 'react'
import productImage from '../../assets/img/300x180/img3.jpg';
import { Link } from 'react-router-dom'
const ServiceItem = (props) => {
    const serviceData = props.serviceData;
    return (
        <div className="col-sm-6 col-lg-4 px-2 px-sm-3 mb-3 mb-sm-5">
            <div className="card card-bordered shadow-none text-center h-100">
                <div className="position-relative">
                    <img style={{maxHeight: '175px', minHeight: '175px', objectFit: 'cover'}} className="card-img-top" src={serviceData.image} alt="Image Description" />

                    <div className="position-absolute top-0 left-0 pt-3 pl-3">
                        {serviceData.bestseller == 'Y' && 
                            <span className="badge badge-danger badge-pill">Bestseller</span>
                        }
                    </div>
                    <div className="position-absolute top-0 right-0 pt-3 pr-3">
                        <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>

                <div className="card-body pt-4 px-4 pb-0">
                    <div className="mb-2">

                        <span className="d-block font-size-1">
                            <a className="text-inherit" href="#">{serviceData.name}</a>
                        </span>
                        <div className="d-block">
                            <span className="text-dark font-weight-bold">${serviceData.pricePerHour}/hr</span>
                        </div>
                    </div>
                </div>

                <div className="card-footer border-0 pt-0 pb-4 px-4">
                    <div className="mb-3">
                        <a className="d-inline-flex align-items-center small" href="#">
                            <div className="text-warning mr-2">
                                <i className="far fa-star text-muted"></i>
                                <i className="far fa-star text-muted"></i>
                                <i className="far fa-star text-muted"></i>
                                <i className="far fa-star text-muted"></i>
                                <i className="far fa-star text-muted"></i>
                            </div>
                            <span>0</span>
                        </a>
                    </div>
                    <Link to={"/services/" + serviceData.serviceId} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
