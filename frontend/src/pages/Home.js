import Hero from "../components/Home/Hero/Hero";
import CategoryList from "../components/Home/Categories/Categories";
import Bestsellers from "../components/Home/Bestsellers/Bestsellers";
import { useContext } from "react";
import BookAProContext from "../components/Context/BookAProContextProvider";

const Home = () => {
  const { categories } = useContext(BookAProContext);

  return (
    <div id="home-container">
      <Hero />

      <CategoryList categories={categories} />

      <Bestsellers />
    </div>
  );
};

export default Home;
