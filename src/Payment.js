import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './Stateprovider';
import CheckoutProd from './CheckoutProd.js';
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payment() {
    const [{ basket, user, name }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    var sum = basket.reduce(function(a, b) {
        return a + b.price;
    }, 0);

    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setdisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `https://us-central1-clone1-4e27e.cloudfunctions.net/api/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

   

    const handleSubmit = async(event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
       
            db
              .collection('users')
              .doc(user?.email)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              });
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'Empty_basket'
            })

            history.replace('/orders');
        })

    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setdisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
 
    return ( 
    	<div className = "payment" >
            <div className = "payment-container" >
             <h1 >Checkout { < Link to = "/checkout" > ({ basket.length }
                    items) < /Link>} 
             </h1>
              <div className = "payment-section" >
                    <div className = "payment-title" >
                      <h3> Delivery address </h3> 
                    </div>
                   <div className = "del-add" >
                    <p> <label> Email: {
                        (user) ? user.email : 'Guest'
                    } </label>
                    </p>
                    <p> <label > Address: 123, Paradise Apt. </label>
                    </p>
                    <p> Bandra, Mumbai - 23445 </p>
                     </div>
                   </div>
                   <div className = "payment-section" >
                     <div className = "payment-title" >
                       <h3 > Review Items to deliver </h3> 
                       </div>
                      <div className = "payment-items" >
                         <CheckoutProd/>
                      </div> 
                   </div> 
                   <div className = "payment-section" >
                     <div className = "payment-title" >
                      <h3> Payment method </h3>
                       </div>
                    <div className = "payment-method" >
                      <form onClick = { handleSubmit } >
                        <CardElement onChange = { handleChange }/> 
                        <div className = "payment-price" >
                    <CurrencyFormat
                      renderText = {
                    (value) => ( <
                        >
                        <
                        p >
                        <
                        strong > Order Total({ basket.length }
                            items): < strong > { sum } < /strong></strong >
                        <
                        /p> < / >
                    )
                }
                decimalScale = { 2 }
                value = { getBasketTotal(basket) }
                displayType = { "text" }
                thousandSeparator = { true }
                prefix = { "$" }
                /> 
                <button disabled = { processing || disabled || succeeded } >
                    <span > {
                        processing ? < p > Processing < /p>:'Buy Now'}</span>
                </button>
                 < /div >

                    {
                            error && < div > { error } < /div>} < /
                            form > <
                            /div> < /
                            div > <
                            /div>  < /
                            div >
                           
                        )
                    }

                export default Payment;