// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Headers';
import Home from './containters/Home/Home';
import Login from './containters/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Home nombre={"Pepe"} apellido={"Gomez"} />
      <Home nombre={"Pepe"} apellido={"Gadafa"} />
      <Login />
    </div>
  );
}

export default App;