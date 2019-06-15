import React, { Component } from 'react';
import "../Styles/Cart.css";
import math from 'mathjs'

import BitcoinPayment from './BitcoinPayment';

class Cart extends Component {
    state = {
        ItemsAddedToCart: [],
        currency: 'USD',
        Quantity: [],
        showBitcoinPayment:false,
        showSuccessPayment:false
    }

    componentDidMount() {
        const cart =this.props.Cart
        let clonedCart = cart.map(item=>({...item}))
        clonedCart.map(i=>{
            i.quantity=1
        })
        this.setState({
            ItemsAddedToCart: clonedCart,
        })
    }
    componentDidUpdate() {
        if (this.state.currency !== this.props.currency) {
            this.setState({
                currency: this.props.currency
            })
        }
    }
    
    handleShowBitcoinPayment=(close)=>{
        if(close!=='yes'){
            this.setState({
                showBitcoinPayment:!this.state.showBitcoinPayment
            })
            if(this.state.showBitcoinPayment===false){
                    document.body.style.overflow = "hidden"
            } else{
                document.body.style.overflow = "visible"
              }
        }
        if(close==='yes'){
            setTimeout(()=>{
                document.body.style.overflow = "visible"
                this.setState({
                    showBitcoinPayment:false
                })
            },3000)
        }
    }
    
    handleIncrementQuantity = (id) => {
    let cart = this.state.ItemsAddedToCart;
    let qq = this.props.Cart;
    let clonedItemsAddedToCart = cart.map(item=>({...item}))
    let clonedCart = qq.map(item=>({...item}))
    let products = this.props.Products1;
    const sp = products.find(item => {
        return item.id === id
    });
    const index = products.indexOf(sp);
    clonedItemsAddedToCart.map(i=>{
        if(i.id===id){
            if(i.quantity <products[index].quantity){
                const numberQuantity=Number(i.quantity);
                i.quantity = numberQuantity + 1;
            }
        }
    })
   clonedCart.map(i=>{
        if(i.id===id){  
            if(i.quantity <products[index].quantity){
                const numberQuantityy=Number(i.quantity);
                i.quantity = numberQuantityy + 1;
            }
        }
    })
   this.props.updatingCart(clonedCart)
        this.setState({
            ItemsAddedToCart: clonedItemsAddedToCart
        })
    }

    handleDecrementQuantity = (id) => {
        let cart = this.state.ItemsAddedToCart;
        let qq = this.props.Cart;
        let clonedItemsAddedToCart = cart.map(item=>({...item}))
        let clonedCart = qq.map(item=>({...item}))
        let products = this.props.Products;
        const sp = products.find(item => {
            return item.id === id
        });
        clonedItemsAddedToCart.map(i=>{
            if(i.id===id){
                if(i.quantity >1){{
                    i.quantity = i.quantity - 1;
                }
            }
        }
        })
       clonedCart.map(i=>{
            if(i.id===id){
                if(i.quantity >1){
                    i.quantity = i.quantity - 1;
                }
                
            }
        })
       this.props.updatingCart(clonedCart) 
            this.setState({
                ItemsAddedToCart: clonedItemsAddedToCart
            })
    }
    
    Subtotal = () => {
        let price = 0;
        const items = this.state.ItemsAddedToCart.map(item => {
            if (this.state.currency === 'USD') {
                price = price + item.priceusd * item.quantity
            }
            else if (this.state.currency === 'EUR') {
                price = price + item.priceusd * item.quantity * this.props.EUR
            }
            else if (this.state.currency === 'PLN') {
                price = price + item.priceusd * item.quantity * this.props.PLN
            }
            else if (this.state.currency === 'BTC') {
                price = price + item.priceusd * item.quantity * this.props.BTC
            }
            else {
                alert('error with subtotal price')
            }
        })
        const finalPrice = price.toFixed(2)
        return finalPrice
    }

    removeItem = (id) => {
        let cart = this.state.ItemsAddedToCart;
        const sp = cart.find(item => {
            return item.id === id
        })
        const index = cart.indexOf(sp);
        cart.splice(index,1)
        this.setState({
            ItemsAddedToCart: cart
        })
        let cart1 = this.state.ItemsAddedToCart;
        cart1.find(item => {
            return item.id === id
        })
        const index1 = cart1.indexOf(sp)
        this.props.igrek(id,index1)
    }

   paypalCheckout=()=>{
       const subtotal=this.Subtotal()
    fetch('https://ph-store-server.herokuapp.com/pay', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price:subtotal,
          currency:this.props.currency
        })
      }).then(res=>res.json()).then(res=>{
          window.location.replace(res)
      })
   }

    render() {
        const itemsInCart = this.state.ItemsAddedToCart.map((item,index) => {
            if (this.state.currency === 'USD') {
                return (
                    <div key={item.id} className="item">
                        <img className='cartPhoto' src={item.photo} alt=""/>
                        <h1 className="itemName">{item.devicename}</h1>
                        <div className="price">{item.priceusd} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>
                        {item.quantity}
                        </div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>
                        <div className="totalPrice">{item.priceusd * item.quantity} {this.props.currency}</div>
                    </div>
                )
            }
            if (this.state.currency === 'EUR') {
                return (
                    <div key={item.id} className="item">
                        <img className='cartPhoto' src={item.photo} alt=""/>
                        
                        <h1 className="itemName">{item.devicename}</h1>
                        <div className="price">{math.multiply(item.priceusd, this.props.EUR).toFixed(2)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                            <div className="totalPrice">{math.multiply(item.priceusd, this.props.EUR, item.quantity).toFixed(2)} {this.props.currency}</div>
                    </div>

                )
            }
            if (this.state.currency === 'PLN') {
                return (
<div key={item.id} className="item">
                        <img className='cartPhoto' src={item.photo} alt=""/>
                        
                        <h1 className="itemName">{item.devicename}</h1>
                        <div className="price">{math.multiply(item.priceusd, this.props.PLN).toFixed(2)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                            <div className="totalPrice">{math.multiply(item.priceusd, this.props.PLN, item.quantity).toFixed(2)} {this.props.currency}</div>
                    </div>
                )
            }
            if (this.state.currency === 'BTC') {
                return (
                    <div key={item.id} className="item">
                        <img className='cartPhoto' src={item.photo} alt=""/>
                        <h1 className="itemName">{item.devicename}</h1>
                        <div className="price">{math.multiply(item.priceusd, this.props.BTC).toFixed(4)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>
                            <div className="totalPrice">{math.multiply(item.priceusd, this.props.BTC, item.quantity).toFixed(4)} {this.props.currency}</div>
                    </div>
                )
            }
        })

        return (
            <>
                <section className="cartSection">
                    <h1 className='cartTitle'>{this.state.ItemsAddedToCart.length === 0 ? 'Your cart is empty' : 'Your Cart:'}</h1>
                    <div className='cartItemsDescription'>
                        <div className='cartProduct'>Product</div>
                        <div className='cartPrice'>Price</div>
                        <div className='cartQuantity'>Quantity</div>
                        <div className='cartTotal'>Total</div>
                    </div>
                    {itemsInCart}
                </section>
                <section className="checkout">
                <div className="discount">Discount: <span>-0 {this.props.currency}</span></div>
                <div className="couponCode">Enter Promo Code: <input type="text"/></div>
                <div className="shipping">Shipping: <span>FREE</span></div>
                <div className='subtotalCart'>Subtotal: <span>{this.Subtotal()} {this.props.currency}</span></div>
                {this.props.currency!=='BTC'&& this.state.ItemsAddedToCart.length?<button className="paypal" onClick={this.paypalCheckout}><span className="buy">Buy now with</span> <span className="logo">Pay</span><span className="logo2">Pal</span></button>:null}
                {this.props.currency==='BTC'&& this.state.ItemsAddedToCart.length?<button className="btc" onClick={this.handleShowBitcoinPayment}>Pay with Bitcoin <i class="fab fa-bitcoin"></i></button>:null}
                </section>
                {this.state.showBitcoinPayment&&<BitcoinPayment handleShowBitcoinPayment={this.handleShowBitcoinPayment} Subtotal={this.Subtotal}   />}
                </>
        )
    }
}


export default Cart;