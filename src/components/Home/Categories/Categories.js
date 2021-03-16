
import cat1 from '../../../assets/img/900x900/img3.jpg';
import cat2 from '../../../assets/img/900x900/img4.jpg';
import cat3 from '../../../assets/img/900x900/img17.jpg';
import cat4 from '../../../assets/img/900x900/img18.jpg';
import {Link} from 'react-router-dom';

const Categories = () => {


    return (
        <div className="container pb-4">
            <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">Product Categories</h2>
            <div className="row">
                <Link to="/listings" className="col-md-6 mb-5 mb-lg-0">
                    <div className="overflow-hidden rounded-lg-pseudo">
                        <div className="bg-img-hero rounded-lg min-h-450rem p-4 p-sm-8 transition-zoom-hover" style={{ backgroundImage: 'url(' + cat1 + ')' }}>
                            <span className="d-block small text-danger font-weight-bold text-cap">Limited time only</span>
                            <h2 className="display-4 mb-3">70% OFF</h2>
                            <p className="text-dark">NAKTO bicycles to save the environment and bring fun to our friends!</p>


                            <a className="btn btn-sm btn-light btn-pill transition-3d-hover px-5" href="#">Shop</a>
                        </div>
                    </div>
                </Link>

                <Link to="/listings" className="col-md-6 mb-4">
                    <div className="overflow-hidden rounded-lg-pseudo">
                        <div className="bg-img-hero rounded-lg min-h-450rem text-white p-4 p-sm-8 transition-zoom-hover" style={{ backgroundImage: 'url(' + cat2 + ')' }}>
                            <div className="max-w-35rem">
                                <div className="mb-4">
                                    <span className="d-block font-size-2">$109.99</span>
                                    <h3 className="text-white">Nakto 26 Bicycle</h3>
                                    <p className="text-white">NAKTO bicycles to save the environment and bring fun to our friends!</p>
                                </div>
                                <div className="d-block">
                                    <button type="button" className="btn btn-sm btn-light btn-pill transition-3d-hover px-5">Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/listings" className="col-md-6 mb-4">
                    <div className="overflow-hidden rounded-lg-pseudo">
                        <div className="bg-img-hero rounded-lg min-h-450rem text-white p-4 p-sm-8 transition-zoom-hover" style={{ backgroundImage: 'url(' + cat3 + ')' }}>
                            <div className="max-w-35rem">
                                <div className="mb-4">
                                    <span className="d-block font-size-2">$109.99</span>
                                    <h3 className="text-white">Nakto 26 Bicycle</h3>
                                    <p className="text-white">NAKTO bicycles to save the environment and bring fun to our friends!</p>
                                </div>
                                <div className="d-block">
                                    <button type="button" className="btn btn-sm btn-light btn-pill transition-3d-hover px-5">Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/listings" className="col-md-6 mb-4">
                    <div className="overflow-hidden rounded-lg-pseudo">
                        <div className="bg-img-hero rounded-lg min-h-450rem text-white p-4 p-sm-8 transition-zoom-hover" style={{ backgroundImage: 'url(' + cat4 + ')' }}>
                            <div className="max-w-35rem">
                                <div className="mb-4">
                                    <span className="d-block font-size-2 text-white">$109.99</span>
                                    <h3 className="text-white">Nakto 26 Bicycle</h3>
                                    <p className="text-white">NAKTO bicycles to save the environment and bring fun to our friends!</p>
                                </div>
                                <div className="d-block">
                                    <button type="button" className="btn btn-sm btn-light btn-pill transition-3d-hover px-5">Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Categories;