import React from 'react';
import './Employee.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchEmployeeData } from '../../actions/fetchEmployee';

class Employee extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { employeeData } = this.props;
    return (
      <div className="homeComponent">
        <div className="contentbody">
          <div className="instances">
            <h4>Employee Details</h4>
            <span onClick={() => this.props.handleLogin(false)}>Logout</span>
          </div>
          {
            employeeData && employeeData.user && employeeData.user.map(item => (
              <div id="customers">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>Age: {item.age}</span>
                <span>Gender: {item.gender}</span>
                <span>Email: {item.email}</span>
                <span>Phone_No: {item.phoneNo}</span>
              </div>
            ))
          }
          
        </div>
      </div>
    )  
  }
}


const mapStateToProps = (state) => {
  return {
    employeeData: state.employeeData
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchData: bindActionCreators(fetchEmployeeData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);