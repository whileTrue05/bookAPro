
import '../../../assets/vendor/slick-carousel/slick/slick.css';

import { Link } from 'react-router-dom';


const BestSellerItem = (props) => {
    return (

        // <div className="mt-0 py-1 mt-md-5 py-md-5 position-relative bg-light">
        //     <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">Our Bestsellers</h2>
            
                <div className="js-slide bg-img-hero-center px-2 px-sm-3 mb-3 mb-sm-5">
                    <div className="card card-bordered shadow-none text-center h-100">
                        <div className="position-relative">
                            <img className="card-img-top" src={props.bestSellerImage} alt="Image Description" />

                            <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                <span className="badge badge-danger badge-pill">Sold out</span>
                            </div>
                            <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>

                        <div className="card-body pt-4 px-4 pb-0">
                            <div className="mb-2">
                                
                                <span className="d-block font-size-1">
                                    <a className="text-inherit" href="shop-single-product.html">{props.bestSellerName}</a>
                                </span>
                                <div className="d-block">
                                    <span className="text-dark font-weight-bold">${props.bestSellerPrice}</span>
                                    <span className="text-body ml-1"><del>$33.99</del></span>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer border-0 pt-0 pb-4 px-4">
                            <div className="mb-3">
                                <a className="d-inline-flex align-items-center small" href="#">
                                    <div className="text-warning mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star text-muted"></i>
                                        <i className="far fa-star text-muted"></i>
                                    </div>
                                    <span>125</span>
                                </a>
                            </div>
                            <Link to={"/services/"+props.id} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                        </div>
                    </div>
                </div>

    );
}

export default BestSellerItem;