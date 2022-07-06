
import './App.css';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import logo from './components/Img/logo.png';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import NotFound from './components/NotFound';

import ItemDetail from './components/ItemDetail/ItemDetail';
import Category from './components/Category/Category';




 


function App() {
  return (
    <div >
      <a href='index.html'><img src={logo} className="logo" alt=""/></a>
      <Navbar/>
      <Routes>
      
        <Route path = "/Home" element={<Home/>}></Route>
        <Route path = "/Products" element={<Products/>}></Route>
        <Route path = "/Category" element={<Category/>}></Route>
        <Route path = "*" element={<NotFound/>}></Route>

       
      </Routes>


     
       
      
    
      
      
      
      
    </div>
  );
}

export default App;
