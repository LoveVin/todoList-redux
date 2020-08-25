import React, {useEffect} from 'react';
import Todos from './components/todos';
import { fetchTodos } from './actions/fetchTodos';
import store from './store';
import Filter from './components/filter';
import AddTodo from './components/addTodo';

function App() {
    useEffect(()=>{
        store.dispatch(fetchTodos())
    },[])
    return (
        <div className="App">
            <AddTodo/>
            <Todos/>
            <Filter/>
        </div>
    );
}

export default App;
