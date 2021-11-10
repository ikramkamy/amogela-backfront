import React from 'react';
import './produits.css';
import  { useState ,useEffect} from "react";


const Produitstock=(props)=>{

const {addproduct,prodID}=props;

    return(<div className="produit-component" id={props.prodID}>

<div className="">
  
  <img src={props.purl} style={{width:"300px",height:"300px"}}></img></div>
    <div className="content-wrapper">
           <div className="info-product">
              <div> {props.pname}</div>
              <div> {props.disponible}</div>
             <div className="price-prod" >Prix: {props.pprice}</div> 
           </div>
        <div className="button-wrapper">
             <button style={{fontSize:"1.85em"}} onClick = {addproduct}   variant="contained" color="secondary">
             Ajouter
             </button>
        </div>
      </div>  


    </div>)
}

export default Produitstock;
