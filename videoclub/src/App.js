// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Headers';
import Home from './containters/Home/Home';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Home nombre={"Pepe"} apellido={"Gomez"} />
    </div>
  );
}

export default App;
