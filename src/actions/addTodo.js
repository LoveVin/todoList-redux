export const add_todo = 'add_todo'

export const addTodo = (text) => {
    return {
        type: add_todo,
        text
    }
}