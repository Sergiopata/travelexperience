/* import { logDOM } from '@testing-library/react'; */
import './App.css';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';



function App() {

    const styles = {
      header : "text-center text-3xl"

    }


  return (
    <div className="App">
      <NavBar/>
        <h1 className="text-9xl font-black text-center">TRAVEL EXPERIENCE</h1>
        <h2 className= {styles.header}>Bienvenidos a la Experiencia de Viajar</h2>
      

      <Card>
        <Saludo name = 'Sergio ' dni = '27162734, '  apodo = 'Pata.' /> 
      </Card>

      <ItemListContainer />

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
