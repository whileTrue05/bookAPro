
import CartItems from '../components/Cart/CartItems';
import CartSummary from '../components/Cart/CartSummary';
import CartEmpty from '../components/Cart/CartEmpty';

import React, { useState, useContext } from "react";
import BookAProContext from "../components/Context/BookAProContextProvider";

const Cart = () => {
  let props = useContext(BookAProContext);

    return (
        <div id="home-container">

            <div className="container space-0 space-lg-3">
            {props.cartItems.length > 0 ? (
                <div className="row">
                    
                    <div className="col-lg-8 mb-7 mb-lg-0">
                        <CartItems  setCartTotal={props.setCartTotal} setCartItems={props.setCartItems} products={props.services} cartTotal={props.cartTotal} cartItems={props.cartItems} />
                    </div>
                    <div className="col-lg-4">
                        <CartSummary cartItems={props.cartItems} totalItems={props.cartItems.length} cartTotal={props.cartTotal} clearCart={props.clearCart} />
                    </div>
                    
                    
                </div>
            ) : (
                <div className="row">
                    <CartEmpty />
                </div>
            )
            }
            </div>
        </div>
    )
}

export default Cart;