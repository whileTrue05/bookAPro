import Hero from "../components/Home/Hero/Hero";
import CategoryList from "../components/Home/Categories/Categories";
import BestSellers from "../components/Home/Bestsellers/BestSellers"
import { useContext } from "react";
import BookAProContext from "../components/Context/BookAProContextProvider";

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
