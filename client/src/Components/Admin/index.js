import React from 'react';
import {Navlink, link} from 'react-router-dom';
import './admin.css';
import MySidebar from '../MySidebar';
import '../../index.css';
const Admin=()=>{

return(<div className="admin">
Bienvenue à Amogela Administration
<div className="admin-background"><img src="/images/logoamo.png" className="admin-background-image"/></div>

<MySidebar usertype="Admin"/>



</div>)


}
export default Admin;