import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    state = {}
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <div className='loginForm'>
                    <h1>LOGIN</h1>
                    <div className='login'>
                        <label className='login' htmlFor="login">Email</label>
                        <br/>
                        <input type="email" id='login' />
                    </div>
                    <div className='password'>
                        <label className='password' htmlFor="password">Password</label>
                        <br/>
                        <input type="password" id='password' />
                    </div>
                    <button className='submitLogin'>login</button>
                    <button className='returnToStore'>Return to Store</button>
                </div>

            </>
        );
    }
}

export default Login;