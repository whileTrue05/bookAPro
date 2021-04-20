import { Link } from 'react-router-dom';
import productImage from '../../assets/img/320x320/img2.jpg';

const CartItems = (props) => {
    const cartItems = props.cartItems;

    

    return (
<div class="container space-1 space-lg-2">
  <div class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
    <h1 class="h3 mb-0">Shopping cart</h1>
    <span>{cartItems.length} items</span>
  </div>

  <form>
    {cartItems.map((cartItem, index) => {

      return (
    <div class="border-bottom pb-5 mb-5">
      <div class="media">
        <div class="max-w-15rem w-100 mr-3">
          <img style={{height:100, width:100, objectFit: 'cover'}} class="img-fluid" src={cartItem.serviceImage} alt="Image Description" />
        </div>
        <div class="media-body">
          <div class="row">
            <div class="col-md-10 mb-3 mb-md-0">
              <Link class="h5 d-block" href="#!" to={"/services/"+cartItem.id}>{cartItem.serviceName}</Link>
              <p>{cartItem.serviceDescription}</p>
              
            </div>

            <div class="col-12 col-md-2  d-md-inline-block text-left text-md-right">
              <span class="h5 d-block mb-1">${cartItem.servicePrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    ) }
    )}

    <div class="d-sm-flex justify-content-start">
      <Link to="/" class="font-weight-bold" >
        <i class="fas fa-angle-left fa-xs mr-1"></i>
        Continue shopping
      </Link>
    </div>
  </form>
</div>

)
}
export default CartItems;