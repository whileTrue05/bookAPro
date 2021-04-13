import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../../assets/img/900x900/img3.jpg";
const CategoryItem = (props) => {
  return (
    
    <Link to={"/categories/"+props.id+"/services"} className="col-md-6 mb-4">
      <div className="overflow-hidden rounded-lg-pseudo">
        <div
          className="bg-img-hero rounded-lg min-h-450rem p-4 p-sm-8 transition-zoom-hover"
          style={{ backgroundImage: `url(${props.categoryImage})` }}
        >
          <span className="d-block small text-success font-weight-bold text-cap">
          <strong>Confirmed Service in minutes</strong>
          </span>
          <h2 className="display-4 mb-3 text-white">10% OFF</h2>
          <p className="text-white">
            
           <strong>{props.categoryName}</strong>
          </p>

          <a
            className="btn btn-sm btn-light btn-pill transition-3d-hover px-5"
            href="#"
          >
            Shop
          </a>
        </div>
      </div>
    </Link>
    
  );
};

export default CategoryItem;
