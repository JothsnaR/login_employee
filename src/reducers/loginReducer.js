import { FETCH_LOGIN, CLEAR_LOGIN } from '../actions/fetchLogin';

export const LoginReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_LOGIN:
            return action.payload;
        case CLEAR_LOGIN:
            return {};
        default:
            return state;
    }
}