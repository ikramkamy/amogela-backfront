import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen} from "react-icons/fa";
import ConsultList from './ConsultList';
import './consult.css';
const Consult=(props)=>{
  const [consult,setConsult]=useState([]);
  const [show,setShow]=useState(false);
  const [show1,setShow1]=useState(false);
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/consult`)
      .then(response =>setConsult(response.data))
   }
    expensesListResp();
  },[]);
    console.log("Gout", consult)
    const handelDelete=(user)=>{
    axios.delete(`/consult/${user._id}`,)
      .then()
      }


return(
<div className="utilisateurs">
<div className="wrap-data">
<div className="btn-create">
  {/*<div ><FaPlus className="icon-creat" onClick={(()=>setShow1(true))}/>Créer</div>*/}
   <div><FaArrowDown className="icon-creat"/>Export</div>
   </div>
<div className="tableau">
    
<div className="item-user tit titf ">Nom</div>
<div className="item-user  tit titf">Télèphone</div>
<div className="item-user tit text-center">Email</div>
<div className="item-user tit text-center">Message</div>
<div className="item-user "></div>
<div className="item-user "></div>
</div>

{consult?.map((e)=><ConsultList name={e.name} _id={e._id} text={e.text}  phone={e.phone}  email={e.email} show={(()=>setShow(true) )} handelDelete={(()=>handelDelete(e))}/>)}


</div> 
</div>)}
export default Consult;