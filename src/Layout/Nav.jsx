import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Search from '../components/Search';
import './Nav.css';
import Logo from '../LOGO1.png'
const Nav = (props) => {


    const handleChangeCurrency = (e) => {
        console.log('11')
        console.log(e.target.value)
        // console.log(e.currentTarget.textContent)
        // const value = e.currentTarget.textContent
        // console.log(value)
        props.setCurrencyNav(e.target.value)
        // console.log(e)

        // const mainArray = props.currencyToChoose
        // mainArray.push(props.currency)
        // const index = mainArray.indexOf(value)
        // console.log(index)
        // if (index !== -1) {
        //     mainArray.splice(index, 1);
        // }



    }
    return (
        <nav>
            
            {/* <ul>
            <li className='logo'><img src={Logo} alt="" className='logo nav'/></li>
                <li>Products</li>
                <li onClick={props.handleOpenSell}><Link className="sell nav" to='/sell'>Sell</Link></li>
                <li><Link className='Login nav' to='/login'>Log In</Link></li>
                <li><Link className="register nav" to='/register'>Register</Link></li>
                <li onClick={props.handleOpenCart}>
                    <Link className="navCart" to='/cart'>{props.Cart.length} Cart</Link>
                </li>
                <li><span>{props.currency}</span>
                    <div className="dropdown">
                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[0]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[1]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[2]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[3]}</p>
                    </div></li>
            </ul>            */}

<section class="top-nav">
    <div>
    <Link className='storeName' to='/'><img src={Logo} alt="" /></Link>
    {/* <img src={Logo} alt="" className='logo nav'/> */}
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><Link className='nav' to='/'>Products</Link></li>
      <li><Link className="nav" to='/sell'>Sell</Link></li>
      <li><Link className='nav' to='/login'>Log In</Link></li>
      <li><Link className="nav" to='/register'>Register</Link></li>
      <li><Link className="nav" to='/cart'>{props.Cart.length} Cart</Link></li>
      {/* <li><span className='currencyChanger'>{props.currency}</span>
                    <div className="dropdown">
                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[0]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[1]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[2]}</p>

                        <p onClick={handleChangeCurrency}
                        >{props.currencyToChoose[3]}</p>
                    </div></li> */}
                    <li className='currency'>
                        <select name="currency" id="currency" onChange={handleChangeCurrency} >
                            <option value={props.currencyToChoose[0]} >{props.currencyToChoose[0]}</option>
                            <option value={props.currencyToChoose[1]} >{props.currencyToChoose[1]}</option>
                            <option value={props.currencyToChoose[2]}>{props.currencyToChoose[2]}</option>
                            <option value={props.currencyToChoose[3]} >{props.currencyToChoose[3]}</option>
                        </select>
                    </li>
    </ul>
    <div className="hamburger" style={{zIndex:'24'}}><i class="fas fa-bars" onClick={props.handleShowHamburger}></i></div>
    {props.showHamburger&&<div className="blur" onClick={props.handleShowHamburger}></div>}
  </section>
  {props.showHamburger?<div  className="hamburgerNav">
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
                            <option value={props.currencyToChoose[1]} >{props.currencyToChoose[1]}</option>
                            <option value={props.currencyToChoose[2]}>{props.currencyToChoose[2]}</option>
                            <option value={props.currencyToChoose[3]} >{props.currencyToChoose[3]}</option>
                        </select>
                    </li>
    </ul>
    </div>:<div className="hamburgerNav" style={{display:'none'}}>
    <ul class="menu">
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