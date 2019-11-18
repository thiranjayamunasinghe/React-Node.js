import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
      //<Redirect to="/cart" />;
      this.props.history.push("/cart");
    }
  }

  handleLogin = () => {
    var payload = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(payload);

    axios.post(`http://localhost:5000/user/login`, payload).then(res => {
      //console.log(res.data.users);
      const token = res.data.token;
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("isAuth", true);

      this.setState({ token });

      this.props.history.push("cart");
    });
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  state = {
    token: "",

    email: "",
    password: ""
  };

  render() {
    return (
      <div className="container">
        <form>
          <div>
            <h2>Login Form</h2>
            <TextField
              id="email"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              autoFocus
              required
              onChange={this.setEmail}
              value={this.state.email}
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleLogin}
          >
            Login
          </Button>
        </form>

        <p>{this.state.token}</p>
      </div>
    );
  }
}

export default Login;
