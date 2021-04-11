
import CartItems from '../components/Cart/CartItems';
import CartSummary from '../components/Cart/CartSummary';
import CartEmpty from '../components/Cart/CartEmpty';

const Home = () => {


    return (
        <div id="home-container">

            <div className="container ">
                <div className="row">
                    <div className="col-lg-8 mb-7 mb-lg-0">
                        <CartItems />
                    </div>
                    <div className="col-lg-4">
                        <CartSummary />
                    </div>
                    <CartEmpty />
                </div>
            </div>
        </div>
    )
}

export default Home;