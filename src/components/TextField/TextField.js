import React from 'react';
import "./TextField.css";

class TextField extends React.Component {
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  }

  handleBlur = () => {
    const {
      value,
      setEmailErrorMessage
    } = this.props;
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      let Message;
      if (value === "") {
        // Enter Email Id
        Message = "Enter Email Id";
        setEmailErrorMessage('userNameError', Message);
      } else if (value !== "" && !emailRegex.test(value)) {
        // Validate Email with regex
        Message = "Enter Valid Email";
        setEmailErrorMessage('userNameError', Message);
      } else {
        setEmailErrorMessage('userNameError', '');
      }
    }

  render() {
    return (
      <div className="textfield">
          <span>{this.props.title}</span>
          <input
            className="textinput"
            value={this.props.value}
            name={this.props.name}
            onChange={this.handleOnChange}
            placeholder="newuser@gmail.com"
            type="text"
            onBlur={this.handleBlur}
            required
          />
          <div className="displayErrormessage">{this.props.fieldError}</div>
      </div>
    );
  }
}

export default TextField;