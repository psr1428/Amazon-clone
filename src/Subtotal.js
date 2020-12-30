import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from './Stateprovider';
import {getBasketTotal} from './reducer';
import  {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom';


function Subtotal(){
	const history=useHistory();
	const [{basket},dispatch]=useStateValue();
    var sum=basket.reduce(function(a,b){
	return a+b.price; 
},0);

	return(
       <div className="subtotal"> 
           <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{sum}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>history.push('/Payment')}>Proceed to Checkout</button>
       </div>
		)
}

export default Subtotal;