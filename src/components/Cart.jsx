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
        showBitcoinPayment:false,
        showSuccessPayment:false
    }

    UNSAFE_componentWillMount(){
        
            
           
      }

    componentDidMount() {
       
        

        const cart =this.props.Cart
        let clonedCart = cart.map(item=>({...item}))
        const quantityToOne=clonedCart.map(i=>{
            i.quantity=1
        })
        // const ee = cart.map(car=>{
        //     car.quantity=1
            
        // })
        
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
    marjen = () => {
        this.setState({
            marjen: this.state.marjen + 1
        })
    }
    handleIncrementQuantity = (id) => {
    //     let cart = this.state.ItemsAddedToCart;
    //     const sp = cart.find(item => {
    //         return item.id === id
    //     });
        
    //     const index = cart.indexOf(sp);
    //     console.log(index)
    //     const product = cart[index];
       
    //     const numberQuantity=Number(product.quantity)
        
       
        
    //     const maxQuantity = this.props.Products
    //     console.log(maxQuantity)
    //     const cc = maxQuantity.find(item => {
    //         return item.id === id
    //     });
    //         console.log(cc)
    //     const indexx = maxQuantity.indexOf(cc);
    //     console.log(indexx)
    //     const ole = maxQuantity[indexx].quantity
    //     console.log(ole)
    //     if(product.quantity<ole){
    //     product.quantity = numberQuantity + 1;
    //     this.setState({
    //         ItemsAddedToCart: cart
    //     })
    // }

    let cart = this.state.ItemsAddedToCart;
    let qq = this.props.Cart;
  
    let clonedItemsAddedToCart = cart.map(item=>({...item}))
    let clonedCart = qq.map(item=>({...item}))
    let products = this.props.Products;
    const sp = products.find(item => {
        return item.id === id
    });
    console.log(sp)
    const index = products.indexOf(sp);
   console.log(index)
    clonedItemsAddedToCart.map(i=>{
        if(i.id===id){
            console.log(i.quantity)
            console.log(products[index].quantity)
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
      console.log(this.props.Products)
// tu sie zmienia tylko itemsaddedtocart
        let cart = this.state.ItemsAddedToCart;
        let qq = this.props.Cart;
      
        let clonedItemsAddedToCart = cart.map(item=>({...item}))
        let clonedCart = qq.map(item=>({...item}))
     
     let products = this.props.Products;
        const sp = products.find(item => {
            return item.id === id
        });
        
        const index = cart.indexOf(sp);
       
        // const product = cart[index];




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
        cart.splice(index,1)
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
      }).then(res=>res.json()).then(res=>{
          console.log(res)
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
                    // <div key={item.id} className="item">
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>


                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.EUR).toFixed(2)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div onClick={() => this.removeItem(item.id)}>Remove</div>


                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.EUR, item.Quantity).toFixed(2)}</div>


                    // </div>
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
                    // <div key={item.id} className="item">
                       
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>



                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.PLN).toFixed(2)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div style={{ marginLeft: '110%', zIndex: '43' }} onClick={() => this.removeItem(item.id)}>Remove</div>



                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.PLN, item.Quantity).toFixed(2)}</div>



                    // </div>

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
                    // <div key={item.id} className="item">
                    //     {item.Photo.includes('blob') ? <Img className='cartPhoto' src={item.Photo} /> : <img className='cartPhoto' src={require(`./${item.Photo}`)} />}
                    //     <h1 className="itemName">{item.DeviceName}</h1>



                    //     <div className="price">{math.multiply(item.PriceUsd, this.props.BTC).toFixed(4)}</div>



                    //     <div className="quantity"> <span className='decrementQuantity' onClick={() => this.handleDecrementQuantity(item.id)}>-</span>{item.Quantity}<span className='incrementQuantity' onClick={() => this.handleIncrementQuantity(item.id)}>+</span></div>
                    //     <div style={{ marginLeft: '110%', zIndex: '43' }} onClick={() => this.removeItem(item.id)}>Remove</div>



                    //     <div className="totalPrice">{math.multiply(item.PriceUsd, this.props.BTC, item.Quantity).toFixed(4)}</div>


                    // </div>
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