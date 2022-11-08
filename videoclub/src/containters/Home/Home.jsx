import React from "react";
import "./Home.css";

const Home = props => {
  return (
    <div className="homeDesign">
      Soy home, mi amigo es {props.nombre} {props.apellido}
    </div>
  );
};

export default Home;
