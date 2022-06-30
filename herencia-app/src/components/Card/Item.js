import "./Item.css";




function Item(props) {
    return (
 
      <div className="card">
        <h3>{props.producto}</h3>
        <p>{props.precio}</p>
       
        <button>AGREGAR</button>
        <p>Disponibilidad :{props.stock}</p>
      
        
      
        
        
        
        
      </div>
      
    );
  }
  
  export default Item;