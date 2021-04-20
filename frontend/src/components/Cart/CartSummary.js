import { Link } from 'react-router-dom';
import { useContext } from "react";
import BookAProContext from "../Context/BookAProContextProvider";

const CartSummary = (props) => {
  const context = useContext(BookAProContext);
  const user = context.user;
  const cartSuccess = false;
  

  const validateCart = (e) => {
    e.preventDefault();
      e.stopPropagation();
    if(user.userId > 0){
      fetch('https://whiletrue-bookapro.herokuapp.com:8878/createReservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: props.cartItems, addressid: context.userData[0].Address[0].user_addressId})
      }).then(function (res) {
          return res.json();
      }).then(function (res) {
          if (res.result) {
              alert(res.message);
              localStorage.setItem('cartitems', '');
              context.clearCart();
              window.location.href = '/checkout';
          } else {
              alert(res.message.message);
          }
      });
    }else{
      e.preventDefault();
      e.stopPropagation();
      window.location.href='/login';
    }
  }

  return (
    <div class="pl-lg-4 space-2">
      <div class="card shadow-soft p-4 mb-4">
        <div class="border-bottom pb-4 mb-4">
          <h2 class="h3 mb-0">Order summary</h2>
        </div>

        <div class="border-bottom pb-4 mb-4">
          <div class="media align-items-center mb-3">
            <span class="d-block font-size-1 mr-3">Item subtotal ({props.totalItems})</span>
            <div class="media-body text-right">
              <span class="text-dark font-weight-bold">${props.cartTotal}</span>
            </div>
          </div>

          <div class="media align-items-center mb-3">
            <span class="d-block font-size-1 mr-3">Delivery</span>
            <div class="media-body text-right">
              <span class="text-dark font-weight-bold">Free</span>
            </div>
          </div>


        </div>


        <div class="media align-items-center mb-3">
          <span class="d-block font-size-1 mr-3">Total</span>
          <div class="media-body text-right">
            <span class="text-dark font-weight-bold">${(parseInt(props.cartTotal))}</span>
          </div>
        </div>

        <div class="row mx-1">
          <div class="col px-1 my-1">
            <Link to="/checkout" class="btn btn-primary btn-block btn-pill transition-3d-hover" href="#" onClick={validateCart}>Checkout</Link>
          </div>
        </div>
      </div>



    </div>


  )
}
export default CartSummary;