import React, { Component } from 'react';

import '../Styles/MainSite.css'
import PhoneProperties from './PhoneProperties.jsx';
import Cart from './Cart.jsx';
import SellSection from './SellSection.jsx'

import SecondSection from './SecondSection.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Products from './Products.jsx';
import Contact from './Contact.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Returns from './Returns.jsx';
import Terms from './Terms.jsx';
import Feedback from './Feedback.jsx';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';




class App extends Component {
  state = {
    showHamburger:false,
    
    shuffle: [],
   
    idOfProduct: null,
    Cart: [],
    currency: 'USD',
    currencyToChoose: ['USD', 'EUR', 'PLN', 'BTC'],
    
    USD: 1,
    EUR: null,
    PLN: null,
    BTC: null,
    checkIfWeSearching: false,
    Products1: [],
    Products: [],
    loadPage:false,
    
  }

  UNSAFE_componentWillMount(){
   
    fetch('https://ph-store-server.herokuapp.com/products', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(res => {
          console.log(res)
          this.setState({
            Products:res,
            Products1:res,
            loadPage:true
          })
          
        }).catch(err => console.log(err))
       
        if(localStorage.Cart){
          
          const datas = JSON.parse(localStorage["Cart"]); 
          if(datas.length){
            this.setState({
              Cart:datas
            })
          }
        }
  }
  componentDidMount() {
    fetch('https://openexchangerates.org/api/latest.json?app_id=acd7ca6ba434434685f7f05df216b290')
      .then(res => res.json())
      .then(res => {
        return (this.setState({
          EUR: res.rates.EUR,
          PLN: res.rates.PLN,
          BTC: res.rates.BTC,
        })
        )
      }).catch(err => alert(err))
  
    let anArrayOfUniqueNumbers = [];

  let numberGenerator = (arr) => {
    console.log(arr)
    if (arr.length >= 4) return;
    let newNumber = Math.floor(Math.random() * 4 + 1);
    console.log(arr)
    if (arr.indexOf(newNumber) < 0) {
      console.log(arr)
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  numberGenerator(anArrayOfUniqueNumbers);
  console.log(anArrayOfUniqueNumbers)
  this.setState({
    shuffle: anArrayOfUniqueNumbers
  })

    

  }

  updatingCart=(update)=>{
    this.setState({
      Cart:update
    })
  }

  fetchingProducts=()=>{
    fetch('https://ph-store-server.herokuapp.com/products', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json()).then(res => {
        this.setState({
          Products:res,
          Products1:res
        })
       
      }).catch(err => console.log(err))
  }


  setIdOfProduct = (idOfProduct) => {
    let anArrayOfUniqueNumbers = [];
    let numberGenerator = function (arr) {
      if (arr.length >= 4) return;
      let newNumber = Math.floor(Math.random() * 5 + 1);
      if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
      }
      numberGenerator(arr);
    };

    numberGenerator(anArrayOfUniqueNumbers);
    if(idOfProduct){
      this.setState({
        idOfProduct,
        shuffle: anArrayOfUniqueNumbers
      })
    }else{
      this.setState({
        shuffle: anArrayOfUniqueNumbers
      })
    }
   
  }
  setCurrencyNav = (currency) => {
    this.setState({
      currency
    })
  }

  handleAddItem = (devicename, photo, priceusd, quantity) => {
    const currentProducts = this.state.Products
    currentProducts.push({
      id: this.state.Products.length,
      devicename: devicename,
      photo: photo,
      priceusd: priceusd,
      quantity,
      AddedToCart: false
    })
    this.setState({
      Products: currentProducts,
      Products1: currentProducts,
    })
  }



  handleShowHamburger=()=>{
    if(!this.state.showHamburger){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "visible"
    }
    
    this.setState({
      showHamburger:!this.state.showHamburger
    })
  }

  checkIfWeSearching = (boolean1) => {
    if (boolean1) {
      this.setState({
        checkIfWeSearching: true
      })
    } else {
      this.setState({
        checkIfWeSearching: false
      })
    }

  }
  handleAddToCart = (id,index) => {
    let products = this.state.Products;
    const product = products.find(item => {
      return item.id === id
    })
    const indexOfProduct = products.indexOf(product)
      const Cart = this.state.Cart;
      Cart.push(product)
    this.setState({
      Cart
    })
    const saveStorage= JSON.stringify(Cart)
    localStorage.setItem('Cart',saveStorage)
  }

  handleSearching = (Products) => {
    this.setState({
      Products
    })
  }


 


  igrek = (ee,index) => {
    const products = this.state.Products1
    const cart = this.state.Cart
    cart.splice(index,1)
  
    // products[index].AddedToCart = false
    
    this.setState({
      Cart:cart,
      Products: products
    })
    const saveStorage= JSON.stringify(cart)
     localStorage.setItem('Cart',saveStorage)
  }
  render() {
    const products = this.state.Products.map((product,index) => {
      
      return (
        <Products
          currency={this.state.currency}
          handleAddToCart={this.handleAddToCart}
          handleShowProperties={this.handleShowProperties}
          id={product.id}
          photo={product.photo}
          devicename={product.devicename}
          priceusd={product.priceusd}
          quantity={product.quantity}
          AddedToCart={product.AddedToCart}
          EUR={this.state.EUR}
          PLN={this.state.PLN}
          BTC={this.state.BTC}
          setIdOfProduct={this.setIdOfProduct}
          indexOfElement={index}
          Cart={this.state.Cart}
        />
      )
    })

    return (
      <Router>

        <div id="container" >
       
          <Nav
            checkIfWeSearching={this.checkIfWeSearching}
            setCurrencyNav={this.setCurrencyNav}
            currency={this.state.currency}
            Cart={this.state.Cart}
            handleOpenSell={this.handleOpenSell}
            handleOpenCart={this.handleOpenCart}
            currencyToChoose={this.state.currencyToChoose}
            products1={this.state.Products1}
            products={this.state.Products}
            handleSearching={this.handleSearching}
            handleShowHamburger={this.handleShowHamburger}
            showHamburger={this.state.showHamburger}
          />
         

          <Route path='/delivery-returns' component={Returns} />
          <Route path='/terms-and-conditions' component={Terms} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/feedback' component={Feedback} />

          <Route path='/cart' render={(props) => (<Cart {...props} Cart={this.state.Cart} currency={this.state.currency} EUR={this.state.EUR} PLN={this.state.PLN} BTC={this.state.BTC} Products={this.state.Products} testujeto={this.testujeto} igrek={this.igrek}  updatingCart={this. updatingCart}/>)} />

          {this.state.loadPage&&<Route path='/properties' render={props => (<PhoneProperties {...props} Products={this.state.Products1} handleAddToCart={this.handleAddToCart} idOfProduct={this.state.idOfProduct} shuffle={this.state.shuffle} EUR={this.state.EUR} BTC={this.state.BTC} PLN={this.state.PLN} currency={this.state.currency} Products33={this.state.Products} tututu={this.state.tututu}  setIdOfProduct={this.setIdOfProduct} Cart={this.state.Cart}/>)} />}


       

        
          {this.state.loadPage&&<Route path='/' exact render={(props) => (<SecondSection {...props} products={products} currency={this.state.currency}  checkIfWeSearching={this.checkIfWeSearching} checkIfWeSearchingBoolean={this.state.checkIfWeSearching} handleSearching={this.handleSearching} products1={this.state.Products1} />)} />}


          <Route path='/sell' render={(props) => (<SellSection {...props} handleAddItem={this.handleAddItem} fetchingProducts={this.fetchingProducts} />)} />

         
            <Footer />
          
        </div >
      </Router>
    );
  }
}

export default App;