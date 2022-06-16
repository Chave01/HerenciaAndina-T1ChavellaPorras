
import './App.css';
import Body from './components/Body';
import Navbar from "./components/Navbar";
import logo from './components/Img/logo.png';



function App() {
  return (
    <div >
      <a href='index.html'><img src={logo} className="logo"/></a>
      <Navbar/>
      <Body/>
      
    </div>
  );
}

export default App;
