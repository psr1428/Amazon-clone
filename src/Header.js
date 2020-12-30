import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {BrowserRouter as Router,Link,Switch,Route,useHistory} from 'react-router-dom';
import {useStateValue} from './Stateprovider';
import Googlelogout from './GoogleLogout.js';
import {auth} from './firebase';
import Orders from './orders';

function Header(){
	const [{basket,name,user},dispatch]=useStateValue();
    const history=useHistory();

	const handleAuth=()=>{
          if(user){
          	auth.signOut();    	
          }
	}
  function refreshPage() {
    window.location.reload(false);
  }
	return(
		<div className='header'>
		  <Link to="/">
              <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
		  </Link>
          
		   <div className="header-search">
             <input className="header-search_Input" type="text"/>
		     <SearchIcon className="header_searchIcon"/>
		   </div>
		   <div className="header-nav">
		     <Link to='/Login'>
              <div onClick={handleAuth} className="header-option">
               <span className="header-optionInspanOne">
                Hello {user?name:'Guest'}</span>
                <span className="header-optionInspanTwo">
                {(user)?(<div onClick={refreshPage}>SignOut</div>
                ):'SignIn'}</span>
              </div>
             </Link>
            <Link to="/orders">  
             <div className="header-option">
               <span className="header-optionInspanOne">
                 Returns</span>
                <span className="header-optionInspanTwo">
                Orders</span>
             </div>
            </Link> 
            
             <div className="header-option">
                 <span className="header-optionInspanOne">
               Your</span>
                <span className="header-optionInspanTwo">
                Prime</span>
             </div>
          
             <Link to="/checkout">
             <div className="header-optionBasket">
                  <ShoppingBasketIcon/>
                  <span className="header-optionInspanTwo header-basketcount">
                  {basket.length}
                  </span>
             </div>
                </Link>
                  <Googlelogout onClick={handleAuth}/>
            <div>
             </div>    
		   </div>
		</div>
		)
}

export default Header;