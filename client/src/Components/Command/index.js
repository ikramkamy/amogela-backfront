import React from 'react';
import './command.css';
import { Link } from 'react-router-dom';

const Command = () => {
    return (<div className="Command">

<div className="containerCommand"> 
        <div className="bloc-command comBox1">

            <span className="command-name"><h1>Cliquez & Retirez </h1> 
            <h3> Amogela Glaces </h3></span>
            <div className="command-btn"><Link to="/shop" >Commander</Link></div>

            <div className="command-discreption">Commendez aujord'hui et récuprérez en magazin le lendemain à une heure que vous choisissez</div>      
</div>
        <div className="bloc-command comBox2">
            <span className="command-name"><h1>Service Livraison</h1>
           <h3> Amogela Glaces </h3> </span>
            <div className="command-btn"><Link to="/shop" >Commander</Link></div>

            <div className="command-discreption">Envie d'une glace, d'un Escimau ou d'une toute autre gourmandise,Amogela arrive jusqu'à vous, choisissez votre produit et commender en ligne</div>
        </div>
        <div className="bloc-command comBox3">
            <span className="command-name"><h1> Shop professionnel</h1>
           <h3> Amogela Glaces </h3> </span>
            <div className="command-btn" ><Link to="/shop" >Commander</Link></div>
            <div className="command-discreption">vous êtes un professionnel(Restaurant, hotel, traiteur) et vous souhaitez acquérir nos saveurs, Amogela met à votre disposition des bacs de 3L et 5L</div>
        </div>

       
        </div>



    </div>

    )
}
export default Command;
