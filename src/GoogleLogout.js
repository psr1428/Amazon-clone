import React from 'react';
import {GoogleLogout} from 'react-google-login';
import {refreshTokenSetup} from './RefreshTokenup.js';
import  {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom';


const clientId='275245150183-tgs5rega6rkc2qfp2u9mbsjodc6budua.apps.googleusercontent.com';


function Googlelogout(){
	const history=useHistory();
    const onSuccess=()=>{
        window.location.replace('/')
        console.log("User Logged out");
       }
   
	return(
        <div>
         <GoogleLogout
           clientId={clientId}
           buttonText="Logout"
           onLogoutSuccess={onSuccess}
           ></GoogleLogout>
        </div>
		);
}

export default Googlelogout;