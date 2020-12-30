import React from 'react';
import './Login.css'
import  {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom';
import {useState} from 'react';
import {auth,signInWithGoogle} from './firebase'; 
import GoogleLogIn from './GoogleLogin.js';
import {useStateValue} from './Stateprovider';


function Login(){
	const history=useHistory();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
    const [{user},dispatch]=useStateValue();
    
    

	const signin=e=>{
		e.preventDefault();

		auth
		.signInWithEmailAndPassword(email,password)
		.then(auth=>{
			if(auth){
			history.push('/');
          }
		})
		.catch(error=>alert(error.message))
		}
	const register=e=>{
		e.preventDefault();
		auth
		.createUserWithEmailAndPassword(email,password)
	    .then((auth)=>{
	    	if(auth){
	    		history.push('/');
	    	}
	    })
	    .catch(error=>alert(error.message))
	}
     return(
        <div className="login">
         <Link to='/'>	
           <img className="login-logo" src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg" alt=""/>
          </Link> 
          <form>
          <div className="login-container"> 
            <h2>Sign In</h2>
            <small>Email</small>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email"/>
            <small>Password</small>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" />
           <button onClick={signin}>Login</button>
            <small>If you don't have an account?</small>
            <button type="submit" onClick={register} className="create-acc">Create account</button>
            <GoogleLogIn/>
          </div>  
           </form> 
        </div>
     	)
}

export default Login;