import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './ItemDetail.css';





function ItemDetail(props) {


  return (
   
 
      <div className='coffeelist' >

        {props.cafes.map((cafe) => (
            <ItemDetailContainer
                nombre={cafe.nombre}
                price={cafe.price}
                description= {cafe.description}
                img = {cafe.img}
                
               
/>

         )) }

      
      

      </div>
     
     
  );
}

export default ItemDetail;
