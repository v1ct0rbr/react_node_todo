import React from 'react'
import PageHeader from '../../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

//import MenuHeader from './menuHeader'


export default props => (
    <React.Fragment>
        <PageHeader name="Todo" small="(Lista de tarefas secundárias)" />
        <section className="container-fluid">
            <TodoForm />
            <TodoList />
        </section>
    </React.Fragment>

)