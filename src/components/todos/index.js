import React from 'react';
import store from '../../store';
import selectFilters from '../../actions/selectFilters';
import {toggleTodo} from '../../actions/toggleTodo';

const Todos = () => {
    let {filter, todos} = store.getState();
    const getShowTodos = () => {
        switch (filter) {
            case selectFilters.show_all:
                return todos;
            case selectFilters.show_complete:
                return todos.filter((todo) => todo.isComplete);
            case selectFilters.show_uncomplete:
                return todos.filter((todo) => !todo.isComplete);
            default:
                return todos
        }
    };

    return todos.length > 0 ? (
        <ul>
            {getShowTodos().map((todo, index) => {
                return (
                    <li key={index}
                        onClick={()=>store.dispatch(toggleTodo(index))}
                        style={{textDecoration: todo.isComplete ? 'line-through': 'none'}}>
                        {todo.text}
                    </li>
                );
            })}
        </ul>
    ) : (
        <div>加载中...</div>
    );

};

export default Todos;