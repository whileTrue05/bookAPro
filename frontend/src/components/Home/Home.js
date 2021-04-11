import Hero from "./Hero/Hero";
import CategoryList from "./Categories/Categories";
import Bestsellers from "./Bestsellers/Bestsellers";
import { useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";

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
