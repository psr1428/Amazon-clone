import React from 'react';
import './Product.css';
import StarRating from 'react-star-ratings';
import {useStateValue} from './Stateprovider';


function Product({title,image,price,rating,id}){
	const [{basket},dispatch]=useStateValue();

    const addTobasket=()=>{
    	//dispatch the item into data layer
        dispatch({
        	type:'ADD-TO-BASKET',
        	item:{
        		id:id,
        		title:title,
        		image:image,
        		price:price,
        		rating:rating,
        		id:id
        	}
        });
    }

	return(
       <div className="product">
          <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product-rating">
            <StarRating rating={rating} starDimension="20px"/>
             </div>
          </div>
          <img src={image} alt=""/>
          <button onClick={addTobasket}>Add to Basket</button>
       </div>
		)

}

export default Product;