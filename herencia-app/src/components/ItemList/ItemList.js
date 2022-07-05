import Item from '../Card/Item';
import "./ItemList.css";
import { useEffect, useState } from 'react';



function ItemList() {

    const [info,setInfo] = useState ([])
    
  useEffect(()=>{
  
  fetch('data.json')
  .then ((resp) => resp.json())
  .then ((data)=> setInfo(data))
  }, [])
  
  
    return (
     
     
      <div className='allCard'>
          {info && info.map(i => <Item producto={i.nombre} precio={i.price} stock = {i.stock} img = {i.img}/>)}
        </div>
     
       
    )
  }
  
  export default ItemList;