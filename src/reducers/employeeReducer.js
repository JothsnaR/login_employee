import { FETCH_EMPLOYEE } from '../actions/fetchEmployee';

export const EmployeeReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
}