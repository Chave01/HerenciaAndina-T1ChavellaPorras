import './Navbar.css';

import CartWidge from '../CartWidge/CartWidge';






function Navbar() {
  return (

<header className='navbar'>
  

             <a className="linkbar" href="index.html">HOME</a>
             <a className="linkbar" href="Producto.html">PRODUCTOS</a>
              <a className="linkbar" href="QuienesSomos.html">QUIENES SOMOS</a>
           
              <a className="linkbar" href="Registrate.html">INICIAR SESIÓN</a>
              <CartWidge/>
           
             
            
            

</header>
  );
}

export default Navbar;