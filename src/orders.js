import React,{useState,useEffect} from 'react';
import {db} from './firebase';
import {useStateValue} from './Stateprovider.js';
import './orders.css';
import StarRatings from 'react-star-ratings';
import Order from './Order.js';

function Orders(){
    const[{basket,user},dispatch]=useStateValue();
    const [orders,setOrders]=useState();
 

    useEffect(()=>{
       if(user){
        db
        .collection('users')
        .doc(user?.email)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
       }
       else{
         setOrders([])
       }
    },[user])

    return(
       <div className="order">
         <h1>Your Orders</h1>
         <div className="order-container">
             {orders?.map(order => (
                    <Order order={order} />
                ))}
           </div> 
       </div>
        )
}

export default Orders;