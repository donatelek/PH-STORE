import React, { Component } from 'react';
import './Register.css'
class Register extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {


        return (
            <div className='registerForm'>
                <h1>SIGN IN</h1>
                <div className='firstName'>
                    <label htmlFor="login">FIRST NAME</label>
                    <input type="text" id='login' />
                </div>
                <div className='lastName'>
                    <label htmlFor="login">LAST NAME</label>
                    <input type="text" id='login' />
                </div>
                <div className='login'>
                    <label htmlFor="login">EMAIL</label>
                    <input type="text" id='login' />
                </div>
                <div className='password'>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id='password' />
                </div>
                <button className='submitLogin'>CREATE</button>
                <button className='returnToStore'>Return to Store</button>
            </div>
        );
    }
}

export default Register;