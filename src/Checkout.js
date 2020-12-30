import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import {useStateValue} from './Stateprovider';
import StarRatings from 'react-star-ratings';
import CheckoutProd from './CheckoutProd';


function Checkout(){
	return(
        <div className="checkout">
          <div className="checkout-left">
             <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt=""/>
          <div className="checkout-title">Your shopping Basket
          </div>
             <CheckoutProd/>
          </div>
          <div className="checkout-right"> 
             <Subtotal/>
          </div>
        </div>
		)
}

export default Checkout;