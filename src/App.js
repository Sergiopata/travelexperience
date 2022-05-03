import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {

    const styles = {
      header : "text-center text-3xl"

    }

  return (
    <div className="App">
      <NavBar/>
        <h1 className="text-9xl font-black text-center">TRAVEL EXPERIENCE</h1>
        <h2 className= {styles.header}>Bienvenidos a la Experiencia de Viajar</h2>

      <ItemListContainer />
      <Footer />
      
    </div>
    
  );
  
}


export default App;
