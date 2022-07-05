
import './App.css';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import logo from './components/Img/logo.png';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import GetInfo from './components/GetInfo/GetInfo';


 







function App() {
  return (
    <div >
      <a href='index.html'><img src={logo} className="logo" alt=""/></a>
      <Navbar/>
      
       <Body/>
       <ItemListContainer/>
       <GetInfo/>
      
    
      
      
      
      
    </div>
  );
}

export default App;
