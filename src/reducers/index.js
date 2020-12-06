import { combineReducers } from 'redux';
import { LoginReducer } from './loginReducer';
import { EmployeeReducer } from './employeeReducer';

export default combineReducers({
    login: LoginReducer,
    employeeData: EmployeeReducer
});