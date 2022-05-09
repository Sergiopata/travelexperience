/* eslint-disable no-unused-vars */
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';


function App() {

    const styles = {
      header : "text-center text-3xl"

    }

  return (
    <BrowserRouter>
    <NavBar/>
    
    <div className="App"> 
        <h1 className="text-9xl font-black text-center">TRAVEL EXPERIENCE</h1>
        <h2 className= {styles.header}>Bienvenidos a la Experiencia de Viajar</h2> 
  
    </div> 
      
      <Routes>
        
      <Route path= '/' element= {<ItemListContainer />}></Route>
      <Route path= '/Item/:itemId' element= {<ItemDetail />}></Route>
      <Route path='/category/:Id' element= {<ItemListContainer />}></Route>
      <Route path= 'Item/'></Route>
      
   
    </Routes>
    <Footer />
    </BrowserRouter>
  );
  
}


export default App;
