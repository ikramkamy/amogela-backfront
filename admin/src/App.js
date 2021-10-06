
import './App.css';
import {FaIceCream,FaGlasses,FaJediOrder,FaCube,FaProductHunt,FaTasks,FaImage,FaClock,FaUser} from "react-icons/fa";
import {BrowserRouter as Router,Switch, Route, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Utilisateurs from './component/Utillisateurs';
import Opning from './component/Opning';
import Barquette from './component/Barquettes';
import Gout from './component/Gout';
import PhotosPages from './component/PhotoPages';
function App() {
  return (
    <div className="App">
        <Router>
    <div className="side-bar">
  
<div className="side-elements">
<div className="side-elem"><FaUser className="icon-side"/><Link to="/users">Utilisateurs</Link></div>
<div className="side-elem"><FaProductHunt className="icon-side"/><Link to="/acc">Produits sur stock</Link></div>
<div className="side-elem"><FaCube className="icon-side"/><Link  to="/barquettes">Barquettes</Link></div>
<div className="side-elem"><FaIceCream className="icon-side"/><Link to="/gouts">Gouts</Link></div>
<div className="side-elem"><FaJediOrder className="icon-side"/><Link exact path="/acc">Cliqué et Retiré</Link></div>
<div className="side-elem"><FaTasks className="icon-side"/><Link exact path="/acc">Cammande Livraison</Link></div>
<div className="side-elem"><FaGlasses className="icon-side"/><Link exact path="/acc">Cammande Proffesionnelles</Link></div>
<div className="side-elem"><FaImage className="icon-side"/><Link to="/photos">Photos pages</Link></div>
<div className="side-elem"><FaClock className="icon-side"/><Link  to="/heure">Les heurs de travail</Link></div>
</div>
</div>

  <Switch> 

<Route exact path="/users" component={Utilisateurs }/>
<Route exact path='/heure' component={Opning}/> 
<Route exact path="/barquettes" >
  <Barquette/>
</Route>
<Route  exact path="/barquettes/:_id" component={Barquette} />
<Route exact path="/gouts" component={Gout}/>
<Route exact path="/gouts/:_id" component={Gout}/>
<Route exact path="/photos"  component={ PhotosPages}/>
  </Switch>
</Router>




    </div>
  );
}

export default App;
