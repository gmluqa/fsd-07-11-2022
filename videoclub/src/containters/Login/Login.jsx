import React from "react";

// variables

let interruptor = false;

// functiones

const cambiaInterruptor = () => {
  interruptor = true;
};

const Login = () => {
  return (
    <div onClick={() => cambiaInterruptor()}>
      Hola soy Login
      {interruptor === true && <div>y el interrupr es false</div>}
    </div>
  );
};

export default Login;
