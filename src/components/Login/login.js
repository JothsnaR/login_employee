import React from 'react';
import TextField from '../TextField/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchLoginData, clearLoginData } from '../../actions/fetchLogin'
import PasswordInput from '../TextField/PasswordInput';
import './login.css';

class Login extends React.Component {
  state = {
    email: "",
    userspassword: "",
    userNameError: '',
    passwordError: '',
    disable: true,
    alerted: false
  }

  componentDidUpdate(prevprops) {
    const { email, userspassword} = this.state;
    const { login } = this.props;
    if(Object.keys(login).length &&
    prevprops.login.username !== login.username &&
    prevprops.login.password !== login.password &&
    email === login.username && userspassword === login.password) {
      this.props.handleLogin(true)
    } else if (Object.keys(login).length &&
    email !== login.username && userspassword !== login.password && !this.state.alerted) {
      alert('Please enter valid email and Password');
      this.setState({
        alerted: true
      })
    }
  }

  componentWillUnmount() {
    this.props.clearLogin();
  }

  handleButton = () => {
    if (this.state.email && this.state.userspassword && !this.state.userNameError && !this.state.passwordError) {
      this.setState({
        disable: false
      })
    }
  }

  handleChange = (name, value) => {
    this.setState ({
      [ name ]: value
    })
    this.handleButton();
  }

  handleSubmit = () => {
    this.props.fetchData();
    if (this.state.alerted) {
      this.setState({
        alerted: false
      })
    }
  }

  render() {
    const { userNameError, passwordError, email, userspassword, disable} = this.state;
    return (
      <div className="loginComponent">
        <div className="loginScreen">
          <h1 className="title">Sign in</h1>
          <TextField
            title="EMAIL"
            value={email}
            name="email"
            handleChange={this.handleChange}
            fieldError={userNameError}
            setEmailErrorMessage={this.handleChange}
          />
          <PasswordInput
            title="PASSWORD"
            passwordvalue={userspassword}
            name="userspassword"
            handleChange={this.handleChange}
            fieldError={passwordError}
            setEmailErrorMessage={this.handleChange}
          />
          <button
            className={`button ${disable ? "disabledButton" : ''}`}
            onClick={this.handleSubmit}
            disabled={disable}
          >Login</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchData: bindActionCreators(fetchLoginData, dispatch),
      clearLogin: bindActionCreators(clearLoginData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);