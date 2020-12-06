import React from 'react';
import "./TextField.css";

class PasswordInput extends React.Component {
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  }

  handleBlur = () => {
    const {
      passwordvalue,
      setEmailErrorMessage
    } = this.props;
      let Message;
      if (passwordvalue === "") {
        Message = "Enter password";
        setEmailErrorMessage("passwordError", Message);
      } else if (passwordvalue !== "" && passwordvalue && passwordvalue.length < 4) {
        Message = "Enter minimum 3 characters";
        setEmailErrorMessage('passwordError', Message);
      } else {
        setEmailErrorMessage('passwordError', '');
      }
    }

  render() {
    return (
      <div className="textfield">
          <span>{this.props.title}</span>
          <input
            className="textinput"
            value={this.props.passwordvalue}
            name={this.props.name}
            onChange={this.handleOnChange}
            placeholder="********"
            type="password"
            onBlur={this.handleBlur}
            required
          />
          <div className="displayErrormessage">{this.props.fieldError}</div>
      </div>
    );
  }
}

export default PasswordInput;