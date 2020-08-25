import ajax from '../ajax';

export const fetch_todos = 'fetch_todos';

/*export const fetchTodos = () => {
    return (dispatch, getState) => {
        dispatch({type: fetch_todos})
        return ajax('/todos').then((todos) => {
            dispatch({type: fetch_todos, todos});
        });
    };
};*/

export const fetchTodos = () => {
    return (dispatch, getState) => {
        ajax('/todos').then((todos) => {
            dispatch({type: fetch_todos, todos});
        });
    };
};