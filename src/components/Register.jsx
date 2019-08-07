import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Register.css'
class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        errors: {
            firstName: false,
            lastName: false,
            email: false,
            password: false
        }
    }

    componentDidMount() {
        try {
            window.scrollTo(0, 0)
        } catch (err) {

        }
    }

    messages = {
        firstName: 'Do not leave this place blank',
        lastName: 'Do not leave this place blank',
        email: 'write your proper email address',
        password: 'password must be at least 6 letters long'
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation()
        if (validation.correct) {
            this.setState({
                errors: {
                    firstName: false,
                    lastName: false,
                    email: false,
                    password: false
                }
            })
        } else {
            this.setState({
                errors: {
                    firstName: !validation.firstName,
                    lastName: !validation.lastName,
                    email: !validation.email,
                    password: !validation.password
                }
            })
        }
    }

    formValidation() {
        let firstName = false;
        let email = false;
        let lastName = false;
        let password = false;
        let correct = false
        if (this.state.firstName.length > 0) {
            firstName = true;
        }
        if (this.state.email.includes('@')) {
            email = true
        }
        if (this.state.lastName.length > 0) {
            lastName = true
        }
        if (this.state.password.length > 5) {
            password = true
        }
        if (firstName && email && lastName && password) {
            correct = true
        }
        return ({ firstName, email, lastName, password, correct })
    }

    render() {
        return (
            <div className='registerForm'>
                <h1>SIGN IN</h1>
                <div className='firstName'>
                    <label htmlFor="login">FIRST NAME</label>
                    <input type="text" id='login' onChange={this.handleFirstName} />
                    {this.state.errors.firstName && <div data-test='firstNameRegister' className='error'>{this.messages.firstName}</div>}
                </div>
                <div className='lastName'>
                    <label htmlFor="login">LAST NAME</label>
                    <input type="text" id='login' onChange={this.handleLastName} />
                    {this.state.errors.lastName && <div data-test='lastNameRegister' className='error'>{this.messages.lastName}</div>}
                </div>
                <div className='login'>
                    <label htmlFor="login">EMAIL</label>
                    <input type="text" id='login' onChange={this.handleEmail} />
                    {this.state.errors.email && <div data-test='emailRegister' className='error'>{this.messages.email}</div>}
                </div>
                <div className='password'>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id='password' onChange={this.handlePassword} />
                    {this.state.errors.password && <div data-test='passwordRegister' className='error'>{this.messages.password}</div>}
                </div>
                <button className='submitLogin' onClick={this.handleSubmit} >CREATE</button>
                <button className='returnToStore'><Link className='return' to='/'>Return to Store</Link></button>
            </div>
        );
    }
}

export default Register;