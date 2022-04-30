import './App.css';

import ProvincesContainer from './travel/ProvincesContainer';
import NavBar from './components/NavBar';

function App() {

    const styles = {
      header : "text-center text-3xl"

    }

  return (
    <div className="App">
      <NavBar/>
        <h1 className="text-9xl font-black text-center">TRAVEL EXPERIENCE</h1>
        <h2 className= {styles.header}>Bienvenidos a la Experiencia de Viajar</h2>

      <ProvincesContainer />
   
    </div>
  );
}

export default App;
