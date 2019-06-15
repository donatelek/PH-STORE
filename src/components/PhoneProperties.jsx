import React, { Component } from 'react';
import math from 'mathjs'
import '../Styles/PhoneProperties.css';

class PhoneProperties extends Component {
    state = {
        randomProducts: null,
        buttonActive: false,
        showOptionsButton: false,
        propertiesFromApi: this.props.propertiesFromApi,
        indexOfElement:this.props.location.pathname.replace('/properties/','')
    }
 
    componentDidMount() {
        window.scrollTo(0, 0)
        let indexOfElement = this.props.location.pathname;
        indexOfElement =  indexOfElement.replace('/properties/','')
        if(!this.props.idOfProduct){
            this.setState({
                indexOfElement
            })
        }
    }

    handleActiveButton=()=>{
        let idOfElement = this.props.location.pathname;
        idOfElement=idOfElement.replace('/properties/','');
        const finalId = Number(idOfElement)
        const Cart=this.props.Cart;
        const product=Cart.find(item=>{
            return item.id===finalId
        })
        const indexOfProduct = Cart.indexOf(product)
       if(indexOfProduct===-1){
          return false
       }else{
           return true
       }
    }
      
    maniek = (currency) => {

        let idOfElement = this.props.location.pathname;
        idOfElement=idOfElement.replace('/properties/','');
        const finalId = Number(idOfElement)
        const Products=this.props.Products;
        const product=Products.find(item=>{
            return item.id===finalId
        })
        const indexOfProduct = Products.indexOf(product)
        if(this.props.idOfProduct){
        const productPrice = this.props.Products[indexOfProduct].priceusd;
        if (currency === 'USD') {
            return productPrice
        } else if (currency === 'EUR') {
            return Math.round(this.props.EUR * productPrice);
        } else if (currency === 'PLN') {
            return Math.round(this.props.PLN * productPrice);
        } else if (currency === 'BTC') {
            return math.round(productPrice * this.props.BTC, 4)
        } else {
            console.log('Error price')
        }}else{
            const productPrice = this.props.Products[indexOfProduct].priceusd;
            if (currency === 'USD') {
                return productPrice
            } else if (currency === 'EUR') {
                return Math.round(this.props.EUR * productPrice);
            } else if (currency === 'PLN') {
                return Math.round(this.props.PLN * productPrice);
            } else if (currency === 'BTC') {
                return math.round(productPrice * this.props.BTC, 4)
            } else {
                console.log('Error price')
        }}
    }

    buttonLoader = () => {
        let idOfElement = this.props.location.pathname;
        idOfElement=idOfElement.replace('/properties/','');
        const finalId = Number(idOfElement)
        const Products=this.props.Products;
        const product=Products.find(item=>{
            return item.id===finalId
        })
        const indexOfProduct = Products.indexOf(product)
        this.setState({
            buttonActive: true,

        })
        setTimeout(() => {
            this.setState({
                buttonActive: false,
                showOptionsButton: true
            })
        }, 1000)
        if(this.props.idOfProduct){
        this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].photo, this.props.Products[indexOfProduct].priceusd, this.props.Products[indexOfProduct].devicename, this.props.Products[indexOfProduct].quantity)
        }else{
            this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].photo, this.props.Products[indexOfProduct].priceusd, this.props.Products[indexOfProduct].devicename, this.props.Products[indexOfProduct].quantity)
        }
    }

    aaa=(index)=>{
        const Products=this.props.Products
    const Product = Products[index]
    const id = Product.id;
    this.props.setIdOfProduct(id)
        this.props.history.push(`/properties/${id}`)
        window.scrollTo(0, 0)
    }
    
    render() {
        let indexOfElement = this.props.location.pathname;
        indexOfElement =  indexOfElement.replace('/properties/','')
        let idOfElement = this.props.location.pathname;
        idOfElement=idOfElement.replace('/properties/','');
        const finalId = Number(idOfElement)
        const Products=this.props.Products;
        const product=Products.find(item=>{
            return item.id===finalId
        })
        const indexOfProduct = Products.indexOf(product)
     const userEmail=this.props.Products[indexOfProduct].email;
     const i = userEmail.indexOf('@');
     const d = userEmail.substring(0,i)

        return (
            <div style={{overflowX:'hidden'}}>
               <div>
                <section className="phoneProperty">
                    <section className="phoneImg">
                            <img src={this.props.Products[indexOfProduct].photo} onClick={this.testt} alt=""/>
                    </section>
                    <section className='phoneDetails'>
                        <div className='deviceName'>{this.props.Products[indexOfProduct].devicename}</div>
                        <img src={this.props.Products[indexOfProduct].photo} onClick={this.testt} alt=""/>
                        <div className='price'>Price: {this.maniek(this.props.currency)} {this.props.currency}</div>
                            <div className="seller">Seller: {d}</div>
                        <div className="condition">Condition: {this.props.Products[indexOfProduct].condition}</div>
                        <div className="userContact">Contact to seller: {this.props.Products[indexOfProduct].email}</div>
                        <div className="itemDescription">Description: <span>{this.props.Products[indexOfProduct].description}</span></div>
                        <div className="shipping">Shipping: Worldwide</div>
                        <button className="addToCart" disabled={this.handleActiveButton()} onClick={()=>{
                            this.buttonLoader() 
                            this.handleActiveButton()
                            }}>{this.handleActiveButton(this.props.id) ? 'In Cart' : 'Add to cart'}</button>
                    </section>
                </section>
                
                <section className='recommendedProducts'>
                <h1 className='recommendedProductsTitle'>You may also like</h1>
                   <ul>
                        <li onClick={()=>this.aaa(this.props.shuffle[0])}> 
                                <div className='deviceName'>{this.props.Products[this.props.shuffle[0]].devicename}</div>
                       <img src={this.props.Products[this.props.shuffle[0]].photo} />
                       </li>
                       <li onClick={()=>this.aaa(this.props.shuffle[1])}><div className='deviceName'>{this.props.Products[this.props.shuffle[1]].devicename}</div>
                        <img src={this.props.Products[this.props.shuffle[1]].photo} /></li>
                        <li onClick={()=>this.aaa(this.props.shuffle[2])}> <div className='deviceName'>{this.props.Products[this.props.shuffle[2]].devicename}</div>
                       <img src={this.props.Products[this.props.shuffle[2]].photo} /></li>
                       <li onClick={()=>this.aaa(this.props.shuffle[3])}>
                           <div className='deviceName'>{this.props.Products[this.props.shuffle[3]].devicename}</div>
                        <img src={this.props.Products[this.props.shuffle[3]].photo} />
                        </li>
                        </ul>
                </section>
                </div>
            </div>
        );
    }
}

export default PhoneProperties;