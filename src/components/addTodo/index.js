import React, {useRef} from 'react';
import store from '../../store';
import {addTodo} from '../../actions/addTodo';

const AddTodo = () => {
    const input = useRef(null)
    const submit = (e)=>{
        e.preventDefault()
        if(input.current.value.trim()){
            store.dispatch(addTodo(input.current.value))
            input.current.value = ''
        }
    }
    return (
        <form onSubmit={submit}>
            <input ref={input}/>
            <button type="submit">添加</button>
        </form>
    )
}

export default AddTodo