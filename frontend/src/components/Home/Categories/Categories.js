import cat1 from "../../../assets/img/900x900/img3.jpg";
import cat2 from "../../../assets/img/900x900/img4.jpg";
import cat3 from "../../../assets/img/900x900/img17.jpg";
import cat4 from "../../../assets/img/900x900/img18.jpg";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem"
const Categories = (props) => {
  //   console.log(`checking out categories: ${categories}`);

  return (
    <div className="container pb-4">
      <h2 className="display-5 text-center mb-5 mt-5 mt-md-0">
        Product Categories
      </h2>
     
      <div className="row">
      {props.categories.map((category)=>(<CategoryItem key={category.categoryId} id={category.categoryId} categoryName={category.name}/>))}
      </div>
    </div>
  );
};

export default Categories;
