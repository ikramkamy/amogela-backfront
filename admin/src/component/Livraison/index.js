import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import LivraisonList from './LivraisonList';
import axios from 'axios';
import {FaArrowDown, FaPlus} from "react-icons/fa";
import { useParams,useHistory } from 'react-router-dom';
const Livraison=(props)=>{
const [clickcom,setClickcom]=useState([]);
  let {_id}=useParams();
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get("/getcommandeByType/Livraison")
      .then(response =>setClickcom(response.data))
   }
    expensesListResp();
    console.log('Clique et retiré commandes sont ici')
    console.log("clickcom", clickcom)
  },[clickcom]);

    const handelDelete=(user)=>{
    axios.delete(`/clearCommande/${_id}`,)
    
      .then()
     
      }


return(
<div className="utilisateurs">
 <div className="btn-create">
   
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
  <div className="user_info">
  <div className="item-user">Nom</div>      
  <div className="item-user">Télèphone</div>
  <div className="item-user">List d'achat</div>
  <div className="item-user">La date</div>
  <div className="item-user">Le lieux</div>
  <div className="item-user"> Montant(DA) </div>
  <div className="item-user">Modifie</div>
  <div className="item-user">Supprimer</div>
  
  
  </div>

    
  {clickcom?.map((e)=><LivraisonList
  username="ikram" list="Voire" 
   phone={e.user[0].phone} 
   commandLieux={e.commandeType[0].commande.command}
   commandDate={e.commandeType[0].commande.date}
 email={e.user[0].email} 
     handelDelete={(()=>handelDelete(e))}
     product={e.cart.name}
     somme={e.somme}
     cart={e.cart}
     _id={e._id}
  />)}

 </div>)
}
export default Livraison;