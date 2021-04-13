import Hero from "./Hero/Hero";
import CategoryList from "./Categories/Categories";
import BestSellers from "./Bestsellers/BestSellers"
import { useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";

const Home = () => {
  const { categories } = useContext(BookAProContext);
  const { bestseller } = useContext(BookAProContext);

  return (
    <div id="home-container">
      <Hero />

      <CategoryList categories={categories} />

      <BestSellers bestseller={bestseller}/>
    </div>
  );
};

export default Home;
