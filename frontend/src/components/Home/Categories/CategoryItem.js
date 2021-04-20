import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../../assets/img/900x900/img3.jpg";
const CategoryItem = (props) => {
  return (
    
    <Link to={"/category/"+props.id} className="col-md-6 mb-4">
      <div className="overflow-hidden rounded-lg-pseudo">
        <div
          className="bg-img-hero rounded-lg min-h-450rem p-4 p-sm-8 transition-zoom-hover position-relative"
          style={{ backgroundImage: `url(${props.categoryImage})` }}
        >
          <div style={{top: 0,left: 0,background: '#00000075',zIndex: '-9'}} class="position-absolute h-100 w-100 rounded-lg"></div>

          <h2 className="display-4 mb-3 text-success">{props.categoryName}</h2>
          <p className="text-white">
            
           <strong>{props.categoryDescription}</strong>
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
