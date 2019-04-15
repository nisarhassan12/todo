/* --------------------------------------- */
/* ----- Todo App ----- */
/* --------------------------------------- */

import {
    render,
    addTodo
} from './utils'


import '../scss/main.scss'

let todos = [{
    id: '1',
    name: 'Thing One'
}, {
    id: '2',
    name: 'Thing Two'
}, {
    id: '3',
    name: 'Thing Four'
}]

/* ----- Selectors ----- */

const todoForm = document.querySelector('.add-todo')
const todoContainer = document.querySelector('.todos')

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoName = e.target.elements.input.value
    e.target.elements.input.value = ''
    todos = addTodo(todos, todoName)
    render(todos, todoContainer)
})

render(todos, todoContainer)