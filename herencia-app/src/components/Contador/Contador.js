import { useState }  from 'react';
import './Contador.css';
import Swal from 'sweetalert2'



function ItemCount({stock, initial}) {
 

const [num, setNum] = useState(0);

const sumar = () => {
if(num <stock) {
    setNum (num + 1)
}
else {
    Swal.fire({
        title: 'Oops',
        icon: 'info',
        text: 'Lamentablemente ya no hay más stock',
        timer: 2000
    
     
      })

}
}

const restar = () => {
    if(num >initial) {
    setNum (num - 1)
}
}
return (
    
    <><div className='BodyItemCount'>

<p className=' warning'> ¡Últimas {stock} unidades!</p>
        <section className=' bodybutton'>
        <button onClick={restar}> <strong>-</strong></button>
        <><p className='num'>{num}</p><>
        <button onClick={sumar}><strong >+</strong></button></></>
        </section>
        <button className='Addtocart'><strong >AGREGAR AL CARRITO</strong></button>
    </div></>
 
  );
}

export default ItemCount;


   