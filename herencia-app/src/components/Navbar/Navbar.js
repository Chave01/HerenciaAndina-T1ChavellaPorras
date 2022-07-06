import './Navbar.css';

import CartWidge from '../CartWidge/CartWidge';
import { NavLink } from 'react-router-dom';






function Navbar() {
  return (

<header className='navbar'>
  
    <div className='wrapnavbar'>
             <NavLink exact activeClassName="active" to ="/Home">HOME</NavLink>
             <NavLink exact activeClassName="active" to ="/Products">PRODUCTOS</NavLink>
             <NavLink exact activeClassName="active" to ="/Category">CATEGORIA</NavLink>
        
            
             <a className="linkbar" href="Registrate.html">INICIAR SESIÓN</a>
              <CartWidge/>
           
             
            
            </div>

</header>
  );
}

export default Navbar;