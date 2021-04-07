
import Hero from '../components/Home/Hero/Hero';
import Categories from '../components/Home/Categories/Categories';
import Bestsellers from '../components/Home/Bestsellers/Bestsellers';

const Home = () => {


    return (
        <div id="home-container">
            <Hero />
            <Categories />
            <Bestsellers />
        </div>
    )
}

export default Home;