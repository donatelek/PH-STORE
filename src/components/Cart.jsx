import React, { Component } from 'react';
import "./Cart.css";
import math from 'mathjs'
import Img from 'react-image';
import BitcoinPayment from './BitcoinPayment';

class Cart extends Component {
    state = {
        ItemsAddedToCart: [],
        currency: 'USD',
        quantityUsd: 1,
        Quantity: [],
        marjen: 10,
        
    }
    componentDidMount() {
        this.setState({
            ItemsAddedToCart: this.props.Cart,
        })
    }
    componentDidUpdate() {
        if (this.state.currency !== this.props.currency) {
            this.setState({
                currency: this.props.currency
            })
            
        }

    }
    marjen = () => {
        this.setState({
            marjen: this.state.marjen + 1
        })
    }
    handleIncrementQuantity = (id) => {
        let cart = this.state.ItemsAddedToCart;
        const sp = cart.find(item => {
            return item.id === id
        });
        const index = cart.indexOf(sp);
        const product = cart[index];
        const numberQuantity=Number(product.Quantity)
      
       
        product.Quantity = numberQuantity + 1;
        this.setState({
            ItemsAddedToCart: cart
        })
    }

    handleDecrementQuantity = (id) => {

        let cart = this.state.ItemsAddedToCart;
        const sp = cart.find(item => {
            return item.id === id
        });
        const index = cart.indexOf(sp);
        const product = cart[index];
        if (product.Quantity > 1) {
            product.Quantity = product.Quantity - 1;

            this.setState({
                ItemsAddedToCart: cart
            })
        }
    }
    Subtotal = () => {
        let price = 0;

        
        const items = this.state.ItemsAddedToCart.map(item => {
            
            if (this.state.currency === 'USD') {
                price = price + item.PriceUsd * item.Quantity
               
            }
            else if (this.state.currency === 'EUR') {
                price = price + item.PriceUsd * item.Quantity * this.props.EUR


            }
            else if (this.state.currency === 'PLN') {
                price = price + item.PriceUsd * item.Quantity * this.props.PLN
         

            }
            else if (this.state.currency === 'BTC') {
                price = price + item.PriceUsd * item.Quantity * this.props.BTC
                
            }
            else {
                alert('error')
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
        const product = cart[index];
       
        this.setState({
            ItemsAddedToCart: cart
        })
        let cart1 = this.state.ItemsAddedToCart;
        const sp1 = cart1.find(item => {
            return item.id === id
        })
        const index1 = cart1.indexOf(sp)
        this.props.igrek(id,index1)
        
        const product1 = cart[index1];
        
       
    };
   paypalCheckout=()=>{
       const macc=this.Subtotal()
       console.log(macc)
    fetch('https://ph-store-server.herokuapp.com/pay', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price:macc,
          currency:this.props.currency
        })
      }).then(res=>{
          console.log(res.url)
        //   this.props.history.push(res.url)
        window.location = res.url;
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
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                        <div className="totalPrice">{item.priceusd * item.quantity} {this.props.currency}</div>
                    </div>
                )
            }
            if (this.state.currency === 'EUR') {
                return (
                    // <div key={item.id} className="item">
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>


                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.EUR).toFixed(2)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div onClick={() => this.removeItem(item.id)}>Remove</div>


                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.EUR, item.Quantity).toFixed(2)}</div>


                    // </div>
                    <div key={item.id} className="item">
                        <img className='cartPhoto' src={item.Photo} alt=""/>
                        
                        <h1 className="itemName">{item.DeviceName}</h1>
                        <div className="price">{math.multiply(item.PriceUsd, this.props.EUR).toFixed(2)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.Quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                            <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.EUR, item.Quantity).toFixed(2)} {this.props.currency}</div>
                    </div>

                )
            }
            if (this.state.currency === 'PLN') {
                return (
                    // <div key={item.id} className="item">
                       
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>



                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.PLN).toFixed(2)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div style={{ marginLeft: '110%', zIndex: '43' }} onClick={() => this.removeItem(item.id)}>Remove</div>



                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.PLN, item.Quantity).toFixed(2)}</div>



                    // </div>

<div key={item.id} className="item">
                        <img className='cartPhoto' src={item.Photo} alt=""/>
                        
                        <h1 className="itemName">{item.DeviceName}</h1>
                        <div className="price">{math.multiply(item.PriceUsd, this.props.PLN).toFixed(2)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.Quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                            <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.PLN, item.Quantity).toFixed(2)} {this.props.currency}</div>
                    </div>
                )
            }
            if (this.state.currency === 'BTC') {
                return (
                    // <div key={item.id} className="item">
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>



                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.BTC).toFixed(4)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div style={{ marginLeft: '110%', zIndex: '43' }} onClick={() => this.removeItem(item.id)}>Remove</div>



                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.BTC, item.Quantity).toFixed(4)}</div>


                    // </div>
                    <div key={item.id} className="item">
                        <img className='cartPhoto' src={item.Photo} alt=""/>
                        
                        <h1 className="itemName">{item.DeviceName}</h1>
                        <div className="price">{math.multiply(item.PriceUsd, this.props.BTC).toFixed(4)} {this.props.currency}</div>
                        <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span><div className='numberOfItems'>{item.Quantity}</div>
                            <span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span><div className='removeItem' onClick={() => this.removeItem(item.id)}>Remove</div></div>

                            <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.BTC, item.Quantity).toFixed(4)} {this.props.currency}</div>
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
                <div className='subtotalCart'>Subtotal: {this.Subtotal()} {this.props.currency}</div>
                <button className="paypal" onClick={this.paypalCheckout}>PAY VIA PAYPAL</button>
                </>
        )
    }
}


export default Cart;