import { Link } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../assets/svg/logos/logo.png';
import bookAProContext from '../Context/BookAProContextProvider';

const Header = () => {
    const userContext = useContext(bookAProContext);
    return (
        <div id="footer-container">
            <div className="bg-dark">
                <div className="container space-top-2">
                    <div className="row justify-content-md-between mb-6">
                        <div className="col-md-6 col-lg-5 mb-3 mb-md-0">
                            <h2 className="text-white font-weight-normal">Subscribe to get the latest from BookAPro</h2>
                        </div>

                        <div className="col-md-6">
                            <form className="js-validate mb-2">
                                <label className="sr-only" htmlFor="signupSrEmail">Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" name="email" id="signupSrEmail" placeholder="Your email address" aria-label="Your email address" required />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-block btn-primary">Subscribe</button>
                                    </div>
                                </div>
                            </form>

                            <p className="small text-white-70">You can unsubscribe at any time.</p>
                        </div>
                    </div>

                    <hr className="opacity-xs my-0" />
                </div>
            </div>

            <footer className="bg-dark">
                <div className="container">
                    <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
                        <div className="row justify-content-lg-between">
                            <div className="col-6 col-md-4 col-lg-4 ml-lg-auto mb-5 mb-lg-0">
                                <div className="mb-4">
                                    <Link to="/" aria-label="Front">
                                        <img className="brand" src={logo} alt="Logo" />
                                    </Link>
                                </div>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link media" href="#!">
                                            <span className="media">
                                                <span className="fas fa-location-arrow mt-1 mr-2"></span>
                                                <span className="media-body">
                                                    Toronto, Canada
                  </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link media" href="tel:1-062-109-9222">
                                            <span className="media">
                                                <span className="fas fa-phone-alt mt-1 mr-2"></span>
                                                <span className="media-body">
                                                    +1 (613) 877-07X0
                  </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                                <h5 className="text-white">Company</h5>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>


                            <div className="col-6 col-md-4 col-lg-4">
                                <h5 className="text-white">Resources</h5>

                                <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span className="media align-items-center">
                                                <i className="fa fa-info-circle mr-2"></i>
                                                <span className="media-body">Help</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <span className="media align-items-center">
                                                <i className="fa fa-user-circle mr-2"></i>
                                                <span className="media-body">{(userContext.user.token && userContext.user.role == 2) ? 'Your Account' : 'User Sign In'}</span>
                                            </span>
                                        </Link>
                                        <Link className="nav-link" to="/providerLogin">
                                            <span className="media align-items-center">
                                                <i className="fa fa-user-circle mr-2"></i>
                                                <span className="media-body">{(userContext.user.token && userContext.user.role == 1) ? 'Your Account' : 'Service Provider Sign In'}</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="opacity-xs my-0" />

                    <div className="space-1">
                        <div className="row align-items-md-center mb-7">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <ul className="nav nav-sm nav-white nav-x-sm align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/privacy">Privacy & Policy</a>
                                    </li>
                                    <li className="nav-item opacity mx-3">/</li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/terms">Terms</a>
                                    </li>
                                    <li className="nav-item opacity mx-3">/</li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Site Map</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 text-md-right">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        <div className="w-md-100 mx-lg-auto">
                            <p className="text-white opacity-sm small">© BookAPro. 2021 . All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Header;