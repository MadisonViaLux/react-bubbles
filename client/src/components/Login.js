import React from "react";
import {axiosAuth} from "../utils/axiosAuth";


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  handleChange = event => {
    this.setState({
      creds: {
        ...this.state.creds,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    axiosAuth()
      .post("/login", this.state.creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/api/colors');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          <button>LOG IN</button>
        </form>
      </div>
    );
  }
}

export default Login;
