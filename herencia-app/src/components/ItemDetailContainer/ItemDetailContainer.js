import './ItemDetailContainer.css';




function ItemDetailContainer(props) {

  

  return (
   <section className='Bodydetailcontainer'>
   
      
        <div className='textdetail'>
        <img src={props.img} />
        <h4>{props.nombre}</h4>
        <p>${props.price}</p>
        <p>{props.description}</p>


     





      </div>
        </section>
     
  );
}

export default ItemDetailContainer;
