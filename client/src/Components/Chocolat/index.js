import React from 'react';
import Footer from '../Footer';
import './chocolat.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Mynavbar from '../Mynavbar'
const Chocolat=()=>{


    return(<div >
        <div className="nav-shop" style={{zIndex:"10"}}>
          <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
          </Link>
        </div>
        <Mynavbar/>
        <div className="Pagename">Chocolat</div>
 <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src="images/chocolat1.jpg" className="size-chocolat"/>
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src="images/chocolat2.jpg" className="size-chocolat" />
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    <img src="images/chocolat3.jpg" className="size-chocolat" />
                </Carousel.Item>
            </Carousel>
<div className="text-choco-wrap">
    <p className="text-chocolat">
<h1>Pourquoi le chocolat?</h1><br/>
La réponse se trouve certainement dans les pages d'un livre "Gelatria Per tutte le stagioni" de Paolo Brundlii; 
un chef glacier chocolatier que j'ai eu a rencontrer plusieurs fois pendant le salon de la glace artisanale à
Rimini en Italie.
qui selon lui l'activité de glacerie et de chocolaterie sont trés complémentaires et deverons se cotoyer dans
un méme magazin; Et c'est à partie de cette reflexion que nous avons commencé à proposer du chocolat depuis l'hiver 2018. 
</p>



</div>
<div className="chocolat" ><button><Link to="/shop">Shop </Link></button></div>
<Footer/>
    </div>)
}
export default Chocolat;