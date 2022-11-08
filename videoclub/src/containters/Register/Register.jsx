import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switch: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  switchState() {
    this.setState({ switch: true });
  }

  render() {
    return (
      <div onClick={() => this.switchState()}>
        Hola soy Register
        {this.state.switch === true && <div>La bombilla esta encendida</div>}
      </div>
    );
  }
}

export default Register;
