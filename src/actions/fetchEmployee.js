

export const FETCH_EMPLOYEE = 'fetch_EmployeeData';

export const fetchEmployeeData = () => {
    return async dispatch => {
        const result = await fetch('/jsonData/employeeData.json').then(response => response.json()).then(resp => resp);
    
        dispatch({
            type: FETCH_EMPLOYEE,
            payload: result
        })
    }
}