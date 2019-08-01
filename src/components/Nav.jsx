import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Nav.css';
import Logo from '../Img/LOGO1.png'
const Nav = (props) => {

    const handleChangeCurrency = (e) => {
        props.setCurrencyNav(e.target.value)
    }

    return (
        <nav>
            <section className="top-nav">
                <div>
                    <Link className='storeName' to='/'><img src={Logo} alt="" /></Link>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li><Link className='nav' to='/'>Products</Link></li>
                    <li><Link className="nav" to='/sell'>Sell</Link></li>
                    <li><Link className='nav' to='/login'>Log In</Link></li>
                    <li><Link className="nav" to='/register'>Register</Link></li>
                    <li><Link className="nav" to='/cart'>{props.Cart.length} Cart</Link></li>
                    <li className='currency'>
                        <select name="currency" id="currency" onChange={handleChangeCurrency} >
                            <option value={props.currencyToChoose[0]} >{props.currencyToChoose[0]}</option>
                            <option value={props.currencyToChoose[1]} >{props.currencyToChoose[1]}</option>
                            <option value={props.currencyToChoose[2]}>{props.currencyToChoose[2]}</option>
                            <option value={props.currencyToChoose[3]} >{props.currencyToChoose[3]}</option>
                        </select>
                    </li>
                </ul>
                <div className="hamburger" style={{ zIndex: '24' }}><i className="fas fa-bars" onClick={props.handleShowHamburger}></i></div>
                {props.showHamburger && <div className="blur" onClick={props.handleShowHamburger}></div>}
            </section>
            {props.showHamburger ? <div className="hamburgerNav">
                <ul class="menu">
                    <li><Link onClick={props.handleShowHamburger} className='nav' to='/'>Products</Link></li>
                    <li><Link onClick={props.handleShowHamburger} className="nav" to='/sell'>Sell</Link></li>
                    <li><Link onClick={props.handleShowHamburger} className='nav' to='/login'>Log In</Link></li>
                    <li><Link onClick={props.handleShowHamburger} className="nav" to='/register'>Register</Link></li>
                    <li><Link onClick={props.handleShowHamburger} className="nav" to='/cart'>{props.Cart.length} Cart</Link></li>
                    <li className='currency'>
                        Currency:
                        <select name="currency" id="currency" onChange={handleChangeCurrency} >
                            <option value={props.currencyToChoose[0]} >{props.currencyToChoose[0]}</option>
                            {props.currency === 'EUR' ? <option value={props.currencyToChoose[1]} selected>{props.currencyToChoose[1]}</option> : <option value={props.currencyToChoose[1]}  >{props.currencyToChoose[1]}</option>}
                            {props.currency === 'PLN' ? <option value={props.currencyToChoose[2]} selected>{props.currencyToChoose[2]}</option> : <option value={props.currencyToChoose[2]}  >{props.currencyToChoose[2]}</option>}
                            {props.currency === 'BTC' ? <option value={props.currencyToChoose[3]} selected>{props.currencyToChoose[3]}</option> : <option value={props.currencyToChoose[3]}  >{props.currencyToChoose[3]}</option>}
                        </select>
                    </li>
                </ul>
            </div> : <div className="hamburgerNav" style={{ display: 'none' }}>
                    <ul className="menu">
                        <li><Link className='nav' to='/'>Products</Link></li>
                        <li><Link className="nav" to='/sell'>Sell</Link></li>
                        <li><Link className='nav' to='/login'>Log In</Link></li>
                        <li><Link className="nav" to='/register'>Register</Link></li>
                        <li><Link className="nav" to='/cart'>{props.Cart.length} Cart</Link></li>
                        <li className='currency'>
                            <select name="currency" id="currency" onChange={handleChangeCurrency} >
                                <option value={props.currencyToChoose[0]} >{props.currencyToChoose[0]}</option>
                                <option value={props.currencyToChoose[1]} >{props.currencyToChoose[1]}</option>
                                <option value={props.currencyToChoose[2]}>{props.currencyToChoose[2]}</option>
                                <option value={props.currencyToChoose[3]} >{props.currencyToChoose[3]}</option>
                            </select>
                        </li>
                    </ul>
                </div>}
        </nav>
    );
}

export default Nav;