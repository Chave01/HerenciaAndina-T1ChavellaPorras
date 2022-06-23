import './ItemListContainer.css';
import ItemCount from '../Contador/Contador';



function ItemListContainer() {
  return (

    <><section className='BodyCatalogo'>

      <h2>Nuestros productos </h2>


      <button className='btn-1'> Elegí tu café</button>

    </section><ItemCount  stock={15} initial={1} /></>
    
  )
}

export default ItemListContainer;