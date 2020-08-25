export const toggle_todo = 'toggle_todo'

export const toggleTodo = (index)=>{
    return {
        type: toggle_todo,
        index
    }
}