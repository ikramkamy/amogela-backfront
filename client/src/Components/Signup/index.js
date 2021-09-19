import React,{useState} from 'react';
import './signup.css';
import axios from 'axios';
import {FaArrowCircleLeft} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../Footer';
import Mynavbar from '../Mynavbar';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Signup=(props)=>{
  const {handelshow}=props;
  const history = useHistory();
const [input,setInput]=useState({
    nom:"",
    email:"",
    password:""
})
const handelChange=(event)=>{
    
    const {name,value}=event.target;
    setInput(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
    }
    })
    }
  
    const handelClick=(event)=>{
        event.preventDefault();
        console.log("we are posting ")
        const newuser={
            firstName:input.firstName,
            lastName:input.lastName,
            email:input.email,
            phone:input.phone,
            username:input.username,
            password:input.password
        }
        console.log(newuser);
        axios.post(`http://localhost:3001/signup`,newuser)
        .then(response => {
         console.log("post with axios succed")
         /*history.push(`/`)*/
         handelshow();
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        }

    
return(<div className="signup">

<div className="signin-box-wrap">
<div className="signup-box">



<form className="form-signup">
<label>Nom</label>
<input type="text"  placeholder="Nom" onChange={handelChange} value={input.lastName} name="lastName" />
<label>Prénom</label>
<input  type="text"  placeholder="Prénom" onChange={handelChange} value={input.firstNamed} name="firstName" />
<label>Username</label>
<input  type="text"  placeholder="username" onChange={handelChange} value={input.username} name="username" />
<label>Email</label>
<input  type="email"  placeholder="email@gmail.com" onChange={handelChange} value={input.email} name="email"/>
<label>Télèphone</label>
<input  type="Number"  placeholder="Numéro de télèphone" onChange={handelChange} value={input.phone} name="phone"/>
<label>Password</label>
<input  type="password"  placeholder="password" onChange={handelChange} value={input.password} name="password" />

<div className="btn-signup-wrapper">
<div className="signup-btn-wrapper" ><button className="signup-btn" onClick={handelClick} ><Link to="/shop">S'inscrir</Link></button></div>

</div>

</form>
<FaArrowCircleLeft onClick ={handelshow} style={{color:"#c19a5d",cursor:"pointer"}}/>

</div>
<div  className="signin-box back-signin">
<div className="signin-title">
  Signup</div>

{/*<Lognav log={loginout} issignin/>*/}
</div>
</div>

</div>)
}

export default Signup;