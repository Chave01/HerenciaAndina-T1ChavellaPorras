
import ItemDetail from '../ItemDetail/ItemDetail';

import './GetInfo.css';
import foto1 from '../Img/foto1.png';
import foto2 from '../Img/foto2.png';





function GetInfo() {

    const Infocofee = [
   
{ id: 1,
  name:"PRENSA FRANCESA EXCLUSIVA",
  price:3000,
  description: "Prensa francesa intervenida por artistas callejeros regionales. Su capacidad es de 150ml ",
  img : foto1





},
{   id: 2,
    name:  "2 SOBRES DE CAFÉ ÓRGANICO SUAVE",
    price:3000,
    description: "2 Sobres de café órganico sin conservantes. Contiene 400g cada sobre ",
    img: foto2
  
  
  
  }

    ]
  return (
    <div className='Bodyinfocoffee'>
<button onClick= {GetInfo}>Ver detalle</button>


    <ItemDetail cafes={Infocofee }/>
      
      
      
      
    </div>
  );
}

export default GetInfo;

