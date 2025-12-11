import './App.css';
import supernova from "./image/supernova.jpg";


import Megusta from './components/Megusta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={supernova} className="App-logo" alt="logo" />
       
       <Megusta/>

      </header>
    </div>
  );
}

export default App;

