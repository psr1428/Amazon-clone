import React from 'react';
import {useStateValue} from './Stateprovider';
import StarRatings from 'react-star-ratings';
import './Checkout.css';

function CheckoutProd(){
    const [{basket,name},dispatch]=useStateValue();
	const arr=basket.map(i=>({
         value0:i.image,
         value:i.title,
         value1:i.price,
         value2:i.rating,
         value3:i.id
	}));
    
    function Removele(id){
    	console.log(id);
        dispatch({
        	type:'Remove-basket',
        	id:id
        })
    }
    return(
           <div>
              <small><h5>Hello {name?name:'Guest'}</h5></small>
             {arr.map(i=><div className="checkout-prod-image">
             	<img className="checkout-images" src={i.value0} alt=""/>
             	<div className="checkout-prod-info">
                 <h3>{i.value}</h3>
                 <h3><small>$</small>{i.value1}</h3>
                 <StarRatings rating={i.value2} starDimension="20px"/>
                 <button onClick={()=>Removele(i.value3)}>Remove from basket</button>
             	 </div>
             	</div>
             	)}

          </div>
    	)
}

export default CheckoutProd;