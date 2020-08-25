import { fetch_todos } from '../actions/fetchTodos';
import { add_todo } from '../actions/addTodo';
import { toggle_todo } from '../actions/toggleTodo';

const todos = (state = [], action)=>{
    switch (action.type) {
        case fetch_todos:
            return action.todos? action.todos : [{ text: '请求开始了'}]
        case add_todo:
            return [...state, { text: action.text, isComplete: false }]
        case toggle_todo:
            return state.map((todo, index)=>{
                if(index === action.index){
                    return {...todo, isComplete: !todo.isComplete}
                }else{
                    return todo
                }
            })
        default:
            return state
    }
}

export default todos