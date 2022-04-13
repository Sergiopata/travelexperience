/* import { logDOM } from '@testing-library/react'; */
import './App.css';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <h1 className="text-9xl font-black text-center">TRAVEL EXPERIENCE</h1>
      <h2 className="text-center text-3xl">Bienvenidos a la Experiencia de Viajar</h2>

      
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
