import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Home.css'; 
import Product from './Product.js';
import SimpleImageSlider from 'react-simple-image-slider';
import axios from 'axios';

function Home(){

  	 const images = [
            { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" },
            { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" },
            { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" },
            { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" } 
        ];
	return(
		<div className="home">
          <div className="home-container">
             <div className="home-image">
                <SimpleImageSlider
                    width={1200}
                    height={504}
                   images={images}
                />
             </div>
           <div className="home-row">
               <Product id="2031122" title="gaming-console" price={59} image="https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
               rating={4.5}/>
                <Product id="2031123" title="headphones" price={20.99} image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
               rating={3}/>
           </div>
            <div className="home-row">
              <Product id="2031124" title="How-to-influence-people" price={4.99} image="https://images-na.ssl-images-amazon.com/images/I/718%2Bbq5ApRL._AC_SY220_.jpg"
               rating={4.5}/>
               <Product id="2031125" title="Alarm-clock" price={15} image="https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg"
               rating={4}/>
               <Product id="2031127" title="usb-cable" price={5.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
               rating={3.5}/>
           </div>
            <div className="home-row">
               <Product id="2031128" title="alexa" price={48.99} image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
               rating={4.9}/>
             
           </div>
          </div>
		</div>
		)
}

export default Home;