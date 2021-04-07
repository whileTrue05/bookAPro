
import Hero from './Hero/Hero';
import Categories from './Categories/Categories';
import Bestsellers from './Bestsellers/Bestsellers';

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