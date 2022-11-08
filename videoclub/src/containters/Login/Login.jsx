import React from "react";

let interruptor = false;

const Login = () => {
  return (
    <div>
      Hola soy Login
      {interruptor === true && <div>y el interrupr es false</div>}
    </div>
  );
};

export default Login;
