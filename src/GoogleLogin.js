import React,{useEffect} from 'react';
import {GoogleLogin} from 'react-google-login';
import {refreshTokenSetup} from './RefreshTokenup.js';
import  {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom';
import {useStateValue} from './Stateprovider.js';
import {auth} from './firebase';

const clientId="889550157625-vrj66msd63id05a4oolov7hgtdhgijae.apps.googleusercontent.com";

function GoogleLogIn(){
   const [{user},dispatch]=useStateValue();
	const history=useHistory();
	const onSuccess=(res)=>{
		    dispatch({
	    	type:'Set-user',
	    	user:res.profileObj
	    })
		history.push('/');
	    refreshTokenSetup(res);
	    user=res.profileObj.name;
	 };
	const onFailure=(res)=>{
		console.log('[Login Failed] res',res);
	};

	return(
       <div>
         <GoogleLogin 
           clientId={clientId}
           buttobText="Login With Google"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'single_host_origin'}
           style={{marginTop:'100px'}}
           isSignedIn={true}
           />
       </div> 
		)
}

export default GoogleLogIn;
