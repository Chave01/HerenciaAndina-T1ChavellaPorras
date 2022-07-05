import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './ItemDetail.css';





function ItemDetail(props) {




  return (
   
 
      <div className='detailcoffee' >

        {props.cafes.map((cafe) => (
            <ItemDetailContainer
                name={cafe.name}
                price={cafe.price}
                description= {cafe.description}
                img = {cafe.img}
                
               
/>

         )) }

      
      

      </div>
     
     
  );
}

export default ItemDetail;