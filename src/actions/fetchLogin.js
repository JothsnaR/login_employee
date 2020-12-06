// import axios from 'axios';

export const FETCH_LOGIN = 'fetch_login';
export const CLEAR_LOGIN = 'clear_login';

export const fetchLoginData = () => {
    return async dispatch => {
        const result = await fetch('/jsonData/loginData.json').then(response => response.json()).then(resp => resp);
    
        dispatch({
            type: FETCH_LOGIN,
            payload: result
        })
    }
}

export const clearLoginData = () => ({
    type: CLEAR_LOGIN
})