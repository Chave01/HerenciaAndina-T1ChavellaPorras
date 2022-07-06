import ItemDetail from '../ItemDetail/ItemDetail';
import './GetInfo.css';
import { useState } from 'react';





function GetInfo() {

    const [coffeeFetch,setCoffeeFetch] = useState ([])
    const [loading,setLoading] = useState (false)
    
 
  const fetchCoffee = () => {
setLoading (true)
fetch ('data.json')
.then ((response) => response.json())
.then ((data) => setCoffeeFetch (data))


}


  return (
    <div className='Bodyinfocoffee'>
<button onClick= {fetchCoffee }>Ver detalle</button>
{loading && <p>cargando</p>}

    <ItemDetail cafes={coffeeFetch }/>
    
      
      
      
      
    </div>
  );
}

export default GetInfo;

