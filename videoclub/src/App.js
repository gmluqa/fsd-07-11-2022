// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Headers';
import Home from './containters/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home nombre={"Pepe"} />
    </div>
  );
}

export default App;
