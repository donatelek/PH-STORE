import React, { Component } from 'react';
import '../Styles/Pagination.css'

class Pagination1 extends Component {
    state = {
        todos: [],
        currentPage: 1,
        todosPerPage: 6,
        currency: 'USD',
        checkIfWeSearching: false
    };

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.mainPageSizeDependOnItems()
        })
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

    mainPageSizeDependOnItems = () => {
        const currentPage = this.state.currentPage
        const todosPerPage = this.state.todosPerPage
        const todos = this.state.todos.length
        const pageesNumber = Math.ceil(todos / todosPerPage)
        const modulo = todos % todosPerPage
        const promotionSection = document.getElementById('promotionSection');
        if ((currentPage === pageesNumber && (modulo === 1 || modulo === 2)) && promotionSection) {
            if (window.innerWidth < 911 && window.innerWidth > 500) {
                promotionSection.style.height = '750px';
            }
            else if (window.innerWidth < 501 && modulo === 1) {
                promotionSection.style.height = '750px';
            }
            else if (window.innerWidth < 501 && modulo === 2) {
                promotionSection.style.height = '1250px';
            }
            else if (window.innerWidth > 910) {
                promotionSection.style.height = 'unset';
            }
        } else if ((currentPage === pageesNumber && (modulo === 3 || modulo === 4)) && promotionSection) {
            if (window.innerWidth < 910 && window.innerWidth > 500) {
                promotionSection.style.height = '1250px';
            } else if (window.innerWidth < 501 && modulo === 3) {

                promotionSection.style.height = '1700px';
            }
            else if (window.innerWidth < 501 && modulo === 4) {
                promotionSection.style.height = '2200px';
            }
            else if (window.innerWidth > 910) {
                promotionSection.style.height = 'unset';
            }
        }
        else if ((currentPage === pageesNumber && window.innerWidth < 501 && modulo === 5) && promotionSection) {
            promotionSection.style.height = '2700px';
        }
        else if ((currentPage !== pageesNumber && window.innerWidth < 501) && promotionSection) {
            promotionSection.style.height = '3000px';
        } else if ((currentPage !== pageesNumber && window.innerWidth < 911) && promotionSection) {
            promotionSection.style.height = '1550px';
        } else if (window.innerWidth > 910 && promotionSection) {
            promotionSection.style.height = 'unset';
        }

    }

    handleClick = (event) => {
        window.scrollTo(0, 0)
        this.setState({
            currentPage: Number(event.target.id)
        })

        const currentPage = Number(event.target.id)
        const todosPerPage = this.state.todosPerPage
        const todos = this.state.todos.length
        const pageesNumber = Math.ceil(todos / todosPerPage)
        const modulo = todos % todosPerPage
        const promotionSection = document.getElementById('promotionSection');

        if (currentPage === pageesNumber && (modulo === 1 || modulo === 2)) {
            if (window.innerWidth < 911 && window.innerWidth > 500) {
                promotionSection.style.height = '750px';
            }
            else if (window.innerWidth < 501 && modulo === 1) {
                promotionSection.style.height = '750px';
            }
            else if (window.innerWidth < 501 && modulo === 2) {
                promotionSection.style.height = '1250px';
            }
        } else if (currentPage === pageesNumber && (modulo === 3 || modulo === 4)) {
            if (window.innerWidth < 910 && window.innerWidth > 500) {
                promotionSection.style.height = '1250px';
            } else if (window.innerWidth < 501 && modulo === 3) {

                promotionSection.style.height = '1700px';
            }
            else if (window.innerWidth < 501 && modulo === 4) {
                promotionSection.style.height = '2200px';
            }
        }
        else if (currentPage === pageesNumber && window.innerWidth < 501 && modulo === 5) {
            promotionSection.style.height = '2700px';
        }
        else if (currentPage !== pageesNumber && window.innerWidth < 501) {
            promotionSection.style.height = '3000px';
        } else if (currentPage !== pageesNumber && window.innerWidth < 911) {
            promotionSection.style.height = '1550px';
        } else if (window.innerWidth > 910) {
            promotionSection.style.height = 'unset';
        }
    }


    render() {
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
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
                <li className='siteList' >{renderPageNumbers}</li>
            </div>
        );
    }
}

export default Pagination1;