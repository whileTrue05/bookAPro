import Hero from "../components/Home/Hero/Hero";
import CategoryList from "../components/Home/Categories/Categories";
import BestSellers from "../components/Home/Bestsellers/Bestsellers"
import { useContext } from "react";
import BookAProContext from "../components/Context/BookAProContextProvider";

const Home = () => {
  const { categories } = useContext(BookAProContext);
  const { bestseller } = useContext(BookAProContext);
  const { services } = useContext(BookAProContext);

  
  
  return (
    <div id="home-container">
      <Hero services={services} />

      <CategoryList categories={categories} />

      <BestSellers bestseller={bestseller}/>
    </div>
  );
};

export default Home;
