import React from 'react';
import moment from 'moment';
import CheckoutProd from './CheckoutProd.js';
import {useStateValue} from './Stateprovider';
import CurrencyFormat from "react-currency-format"
import StarRatings from 'react-star-ratings';
import './order.css'

function Order({order}){
  
    return(
     <div className="order">
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
         {order.data.basket?.map(item => (
         	 <div>
             	<img className="image" src={item.image} alt=""/>
             	<div className="checkout-prod-info">
                 <h3>{item.title}</h3>
                 <h3><small>$</small>{item.price}</h3>
                 <StarRatings rating={item.rating} starDimension="20px"/>
              </div>
             </div> 
            ))}
          <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />         
      
     </div>
   	)
}

export default Order;