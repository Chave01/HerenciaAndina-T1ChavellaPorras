import './ItemListContainer.css';
import ItemCount from '../Contador/Contador';
import ItemList from '../ItemList/ItemList';




function ItemListContainer() {

  

  return (
   
    <section className='BodyCatalogo'>
      <div>
        <h2>Nuestros productos </h2>


        <button className='btn-1'> Elegí tu café</button>

        <ItemCount stock={15} initial={1} />
      </div>
      <ItemList/>
    </section>
   
     
  )
}

export default ItemListContainer;