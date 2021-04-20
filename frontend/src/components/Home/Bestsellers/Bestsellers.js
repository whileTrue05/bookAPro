import React from 'react'
import BestSellerItem from "./BestsellerItem"
import Slider from "react-slick";


const CustomPrev = (props) => {
  const { className, style, onClick } = props;
  return (
      <div
          className={className + ' fas fa-arrow-left slick-arrow slick-arrow-left slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle ml-sm-2 ml-xl-4'}
          style={{ ...style }}
          onClick={onClick}
      />
  );

}

const CustomNext = (props) => {
  const { className, style, onClick } = props;
  return (
      <div
          className={className + ' fas fa-arrow-right slick-arrow slick-arrow-right slick-arrow-centered-y d-sm-inline-flex shadow-soft rounded-circle mr-sm-2 mr-xl-4'}
          style={{ ...style }}
          onClick={onClick}
      />
  );

}

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <CustomPrev />,
  nextArrow: <CustomNext />,
  responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};


const Bestsellers = (props) => {
    return (
        <div className="mt-0 py-1 mt-md-5 py-md-5 position-relative bg-light">
        <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">
          Our Bestsellers
        </h2>
        <div className="row">
        {props.bestseller.map((bestSellerItem)=>(<BestSellerItem key={bestSellerItem.serviceId} id={bestSellerItem.serviceId} bestSellerName={bestSellerItem.name} bestSellerPrice={bestSellerItem.pricePerHour} bestSellerImage={bestSellerItem.image}/>))}
        </div>
      </div>
    )
}

export default Bestsellers
