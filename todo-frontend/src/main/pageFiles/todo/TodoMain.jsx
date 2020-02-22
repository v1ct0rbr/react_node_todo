import React, { Component } from 'react'
import Axios from 'axios'
import PageHeader from '../../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

//import MenuHeader from './menuHeader'

const URL = 'http://localhost/api'


export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        //this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.refresh()
    }



    refresh() {
        Axios.get(`${URL}/find?orderBy=createdAt&method=-1`).then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleSearch = () => {
        const description = this.state.description
        Axios.get(`${URL}/find?description=${description}&orderBy=createdAt&method=-1`).then(resp => { this.setState({ ...this.state, list: resp.data }) })

    }

    handleRemove = (e) => {

        Axios.delete(`${URL}/delete/${e._id}`).then(resp => this.refresh())

    }

    handleMarkAsDone = (e) => {
        var doTask = e.done == true ? 'false' : 'true'
        Axios.put(`${URL}/do/${e._id}?done=${doTask}`).then(resp => this.refresh())

        //Axios.put(`${URL}/${e._id}`,{ ...Todo, done: true}).then(resp => this.refresh())
    }

    handleChange = (e) => {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleKeyDown = (e) => {
        this.handleSearch();
    }

    handleAdd = () => {

        const description = this.state.description
        Axios.post(URL, { description }).then(resp => this.refresh())

    }

    handleClearSearch = async () => {
        await this.setState({ ...this.state, description: '' })
        this.handleSearch()
    }



    updateDescription = async (id, description) => {
        await Axios.put(`${URL}/${id}`, { description }).then(resp => this.refresh())
    }

    render() {
        return (<React.Fragment>
            <PageHeader name="Todo Main" small="(Lista de tarefas primárias)" />
            <section className="container-fluid">

                <TodoForm handleClearSearch={this.handleClearSearch} handleAdd={this.handleAdd} handleKeyDown={this.handleKeyDown} handleChange={this.handleChange} handleSearch={this.handleSearch} description={this.state.description} />
                <br />
                <TodoList list={this.state.list} updateDescription={this.updateDescription} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} />

            </section>
        </React.Fragment>)
    }
}



