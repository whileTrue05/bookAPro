
import '../../../assets/vendor/slick-carousel/slick/slick.css';

import { Link } from 'react-router-dom';


const BestSellerItem = (props) => {
    return (

        // <div className="mt-0 py-1 mt-md-5 py-md-5 position-relative bg-light">
        //     <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">Our Bestsellers</h2>
            
                <div className="col-12 col-sm-6 col-md-3 bg-img-hero-center px-2 px-sm-3 mb-3 mb-sm-5">
                    <div className="card card-bordered shadow-none text-center h-100">
                        <div className="position-relative">
                            <img style={{maxHeight: '300px', minHeight: '300px', objectFit: 'cover'}} className="card-img-top" src={props.bestSellerImage} alt="Image Description" />

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
                            <Link to={"/services/"+props.id} type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                        </div>
                    </div>
                </div>

    );
}

export default BestSellerItem;