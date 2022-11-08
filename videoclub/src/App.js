// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Headers';
import Home from './containters/Home/Home';
import Login from './containters/Login/Login';
import Register from './containters/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Home nombre={"Pepe"} apellido={"Gomez"} />
      <Home nombre={"Pepe"} apellido={"Gadafa"} />
      <Login />
      <Register />
    </div>
  );
}

export default App;