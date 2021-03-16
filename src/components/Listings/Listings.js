import ListingSidebar from './Sidebar';
import productImage from '../../assets/img/300x180/img3.jpg';
import { Link } from 'react-router-dom';

const Listings = () => {
    return (
        <div className="container space-2 space-lg-4">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <ListingSidebar />
                </div>
                <div className="col-lg-9 mb-5 mb-lg-0">
                    <div className="row">
                    <div className="col-6 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                        <div className="card card-bordered shadow-none text-center h-100">
                            <div className="position-relative">
                                <img className="card-img-top" src={productImage} alt="Image Description" />

                                <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                    <span className="badge badge-success badge-pill">New arrival</span>
                                </div>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-4 px-4 pb-0">
                                <div className="mb-2">
                                    <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">Accessories</a>
                                    <span className="d-block font-size-1">
                                        <a className="text-inherit" href="#">Herschel backpack in dark blue</a>
                                    </span>
                                    <div className="d-block">
                                        <span className="text-dark font-weight-bold">$56.99</span>
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
                                <Link to="/product" type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                        <div className="card card-bordered shadow-none text-center h-100">
                            <div className="position-relative">
                                <img className="card-img-top" src={productImage} alt="Image Description" />

                                <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                    <span className="badge badge-success badge-pill">New arrival</span>
                                </div>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-4 px-4 pb-0">
                                <div className="mb-2">
                                    <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">Accessories</a>
                                    <span className="d-block font-size-1">
                                        <a className="text-inherit" href="#">Herschel backpack in dark blue</a>
                                    </span>
                                    <div className="d-block">
                                        <span className="text-dark font-weight-bold">$56.99</span>
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
                                <Link to="/product" type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                        <div className="card card-bordered shadow-none text-center h-100">
                            <div className="position-relative">
                                <img className="card-img-top" src={productImage} alt="Image Description" />

                                <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                    <span className="badge badge-success badge-pill">New arrival</span>
                                </div>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-4 px-4 pb-0">
                                <div className="mb-2">
                                    <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">Accessories</a>
                                    <span className="d-block font-size-1">
                                        <a className="text-inherit" href="#">Herschel backpack in dark blue</a>
                                    </span>
                                    <div className="d-block">
                                        <span className="text-dark font-weight-bold">$56.99</span>
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
                                <Link to="/product" type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-4 px-2 px-sm-3 mb-3 mb-sm-5">
                        <div className="card card-bordered shadow-none text-center h-100">
                            <div className="position-relative">
                                <img className="card-img-top" src={productImage} alt="Image Description" />

                                <div className="position-absolute top-0 left-0 pt-3 pl-3">
                                    <span className="badge badge-success badge-pill">New arrival</span>
                                </div>
                                <div className="position-absolute top-0 right-0 pt-3 pr-3">
                                    <button type="button" className="btn btn-xs btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body pt-4 px-4 pb-0">
                                <div className="mb-2">
                                    <a className="d-inline-block text-body small font-weight-bold mb-1" href="#">Accessories</a>
                                    <span className="d-block font-size-1">
                                        <a className="text-inherit" href="#">Herschel backpack in dark blue</a>
                                    </span>
                                    <div className="d-block">
                                        <span className="text-dark font-weight-bold">$56.99</span>
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
                                <Link to="/product" type="button" className="btn btn-sm btn-outline-primary btn-pill transition-3d-hover">View Product</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listings;