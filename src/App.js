import React from 'react'
import './App.css';
import Login from './components/Login/login';
import Employee from './components/EmployeeData/Employee';

class App extends React.Component {
  state = {
    isloggedIn: false
  }
  handleLogin = (loggedin) => {
    this.setState({
      isloggedIn: loggedin
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.isloggedIn ? <Employee handleLogin={this.handleLogin} /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
