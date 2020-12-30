import React, { useEffect } from 'react';
import Header from './Header.js'
import Home from './Home.js'
import './App.css';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login.js';
import { useStateValue } from './Stateprovider.js';
import Payment from './Payment.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './orders';


const Promise = loadStripe('pk_test_51HUuljARgZFW9hkV5BlQCzMc3V2noTXoYWOcr20gRvakltS1BMIW41z1t9uVJYAHvCSFlQUcVXLPlBp3iQw5Boca00V1CmsNtR');

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {

            if (authUser) {
                dispatch({
                    type: 'Set-user',
                    user: authUser
                });
            }
        });
    }, []);


    return (
     < Router >
        <div className = "app" >
        <Switch >
         <Route path = '/orders' >
           <Header / >
           <Orders / >
        </Route >
        <Route path = "/Login" >
           <Login / >
        </Route>
        <Route path = "/checkout" >
         { /*Header*/ } 
          <Header / > 
        { /*Checkout*/ } 
          <Checkout / >
        </Route>
        <Route path = "/Payment" > 
        { /*Header*/ }
         <Header / > 
       { /*Payment*/ } 
           <Elements stripe = { Promise } >
           <Payment / >
           </Elements>
       </Route > 
       <Route path = "/" > 
     { /*Header*/ } 
         <Header / > 
       { /*Home*/ }
        <Home / >
        </Route>
         </Switch >
      </div> 
     </Router >
    );
}

export default App;