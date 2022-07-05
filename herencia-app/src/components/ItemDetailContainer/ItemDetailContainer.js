import './ItemDetailContainer.css';







function ItemDetailContainer(props) {

  

  return (
   <section className='Bodydetailcontainer'>
   
      <img src={props.img} />
        <div className='textdetail'>
        <h4>{props.name}</h4>
        <p>${props.price}</p>
        <p>{props.description}</p>


     





      </div>
        </section>
     
  );
}

export default ItemDetailContainer;