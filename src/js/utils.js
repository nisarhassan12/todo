/* ----- Renderer ----- */

const render = (todos, target) => {

    target.innerHTML = ''
    
    todos.forEach(({
        name
    }) => {
        const todoEl = document.createElement('div')
        const todoName = document.createElement('span')
        const checkbox = document.createElement('input')

        todoName.textContent = name
        checkbox.setAttribute('type', 'checkbox')

        todoEl.appendChild(todoName)
        todoEl.appendChild(checkbox)

        target.appendChild(todoEl)
    })

}

/* ----- Create UUID ----- */

const create_UUID = () => {
    let dt = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (dt + Math.random()*16)%16 | 0
        dt = Math.floor(dt/16)
        return (c=='x' ? r :(r&0x3|0x8)).toString(16)
    })
    return uuid
}

/* ----- Add Todo ----- */

const addTodo = (todos, todoName) => ([{id: create_UUID(), name: todoName}, ...todos])

export {
    render,
    addTodo
}