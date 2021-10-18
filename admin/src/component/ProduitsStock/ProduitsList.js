import React from 'react';
import { Link } from 'react-router-dom';
import './produits.css';
import {FaPen,FaTrash} from "react-icons/fa";
const ProduitsList=(props)=>{
const {handelDelete}=props;


    
return(
<div className="user_info">

   
  <div className="item-user">{props._id}</div>      
  <div className="item-user">{props.name}</div>
  <div className="item-user">{props.cathegorie}</div>
  <div className="item-user">{props.prix}</div>

  <div className="item-user">{props.disponible}</div>
  <div className="item-user edite-btn-u" onClick={props.show}><FaPen className="icon-edit-u"/><Link to={`/barquettes/${props._id}`}>Edite</Link> </div>
  <div className="item-user edite-btn" onClick={handelDelete}><FaTrash className="icon-edit" onClick={handelDelete}/><div to={`/produits`}>Supprimer </div></div>
    </div>)
}
export default ProduitsList;