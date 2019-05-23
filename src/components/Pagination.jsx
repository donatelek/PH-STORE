import Pagination from "react-js-pagination";
import React, { Component } from 'react';
import './Pagination.css'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Pagination1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            currentPage: 1,
            todosPerPage: 6,
            currency: 'USD',
            bums: '',
            checkIfWeSearching: false

        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({
            todos: this.props.products

        })



    }
    componentDidUpdate() {
        if (this.props.currency !== this.state.currency || this.props.products !== this.state.todos) {
            this.setState({
                currency: this.props.currency,
                todos: this.props.products
            })
            console.log(this.props.products)
        }
        if (this.props.checkIfWeSearchingBoolean !== this.state.checkIfWeSearching) {
            if (this.props.checkIfWeSearchingBoolean) {
                this.setState({
                    currentPage: 1
                })
            }
            this.setState({
                checkIfWeSearching: this.props.checkIfWeSearchingBoolean,

            })
        }


    }


    handleClick(event) {

        this.setState({
            currentPage: Number(event.target.id)
        })

    }


    render() {

        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            // console.log(todo)
            return <div key={index}>{todo}</div>;
        });
        const pageNumbers = [];


        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }


        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}

                    onClick={this.handleClick}

                >

                    {number}
                </li>
            );
        })
        return (
            <div className="pagination">

                <li className='pagiNation'>{renderTodos}</li>
                <li className='siteList'>{renderPageNumbers}</li>

            </div>
        );
    }
}

export default Pagination1;