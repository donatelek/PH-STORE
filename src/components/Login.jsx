import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Login.css';
class Login extends Component {
    state = {
        email:'',
        password:'',
        errors:{
            email:false,
            password:false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    messages={
        error:'User with those credentials does not exist'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation()
        if (validation.correct) {
            this.setState({
                errors: {
                    email: false,
                    password: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    email: !validation.email,
                    password: !validation.password,
                }
            })
        }

    }

    handleLoginChange=(e)=>{
this.setState({
    email:e.target.value
})
    }

    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    formValidation() {
        let email = false;
        let password = false;
        let correct = false
        if (this.state.email.includes('@')) {
            email = true;
        }
       if(this.state.password.length >5){
           password = true;
       }
        if (password && email) {
            correct = true
        }
        return ({ password, email, correct })
    }
    render() {
        return (
            <>
                <div className='loginForm'>
                    <h1>LOGIN</h1>
                    {this.state.errors.email||this.state.errors.password?<div className='loginError'>{this.messages.error}</div>:null}
                    <div className='login'>
                        <label className='login' htmlFor="login">Email</label>
                        <br/>
                        <input type="email" id='login' onChange={this.handleLoginChange}  />
                    </div>
                    <div className='password'>
                        <label className='password' htmlFor="password">Password</label>
                        <br/>
                        <input type="password" id='password' onChange={this.handlePasswordChange}/>
                    </div>
                    <button className='submitLogin' onClick={this.handleSubmit}>login</button>
                    <button className='returnToStore'><Link className='return' to='/'>Return to Store</Link></button>
                </div>
            </>
        );
    }
}

export default Login;