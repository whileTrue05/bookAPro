import Slider from "react-slick";
import '../../../assets/vendor/slick-carousel/slick/slick.css';
import sliderImg1 from '../../../assets/img/mockups/img5.png';
import sliderImg2 from '../../../assets/img/mockups/img6.png';
import { Link } from 'react-router-dom';

const CustomPrev = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
          className={className+' fas fa-arrow-left slick-arrow slick-arrow-left slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle ml-sm-2 ml-xl-4'}
          style={{ ...style}}
          onClick={onClick}
        />
      );

}

const CustomNext = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
          className={className+' fas fa-arrow-right slick-arrow slick-arrow-right slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle mr-sm-2 mr-xl-4'}
          style={{ ...style}}
          onClick={onClick}
        />
      );

}

const sliderSettings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    prevArrow: <CustomPrev />,
    nextArrow: <CustomNext />
};

const Hero = () => {
    return (

        <div className="mt-0 py-0 mt-md-5 py-md-5 position-relative">

            <Slider id="heroSlider" className="mt-0 py-0 mt-md-5 py-md-5 bg-light" {...sliderSettings}>
                <div className="js-slide">
                    <div className="container space-top-2 space-bottom-3">
                        <div className="row align-items-lg-center">
                            <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                <div className="mb-6">
                                    <h1 className="display-4 mb-4">Front original design cap</h1>
                                    <p>As well as being game-changers when it comes to technical innovation, Front has some of the bestselling cap in its locker.</p>
                                </div>
                                <Link to="/product" className="btn btn-primary btn-pill transition-3d-hover px-5 mr-2" href="#">$59 - View Product</Link>
                                <a className="btn btn-icon btn-outline-primary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Save for later">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="w-85 mx-auto">
                                    <img className="img-fluid" src={sliderImg1} alt="Image Description" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="js-slide">
                    <div className="container space-top-2 space-bottom-3">
                        <div className="row align-items-lg-center">
                            <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                                <div className="mb-6">
                                    <h1 className="display-4 mb-4">Front original design cap</h1>
                                    <p>As well as being game-changers when it comes to technical innovation, Front has some of the bestselling cap in its locker.</p>
                                </div>
                                <Link to="/product" className="btn btn-primary btn-pill transition-3d-hover px-5 mr-2" href="#">$59 - View Product</Link>
                                <a className="btn btn-icon btn-outline-primary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Save for later">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="w-85 mx-auto">
                                    <img className="img-fluid" src={sliderImg2} alt="Image Description" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            
        </div>
    );
}

export default Hero;