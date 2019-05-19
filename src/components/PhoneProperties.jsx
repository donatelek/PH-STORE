import Img from 'react-image';
import React, { Component } from 'react';
import fonoapi from 'fonoapi-nodejs';
import math from 'mathjs'
import './PhoneProperties.css';
import {withRouter} from 'react-router-dom';
import { browserHistory } from 'react-router';

fonoapi.token = 'cc030770b8c507b2e6bdcefce8f9f65396966f16cf328ece';
class PhoneProperties extends Component {
    state = {
        randomProducts: null,
        buttonActive: false,
        showOptionsButton: false,
        propertiesFromApi: this.props.propertiesFromApi,
        buraczek:[],
        indexOfElement:this.props.location.pathname.replace('/properties/','')
    }
 
  

    componentDidMount() {
        console.log(this.props.Products)
        // this.props.history.push('/')
        let indexOfElement = this.props.location.pathname;
        
        indexOfElement =  indexOfElement.replace('/properties/','')
        console.log(indexOfElement)
        console.log(this.props.location.pathname)
        if(!this.props.idOfProduct){
            this.setState({
                indexOfElement
            })
            
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
        console.log(this.state.indexOfElement)
        if(this.props.idOfProduct){
        const productPrice = this.props.Products[indexOfProduct].PriceUsd;
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
            const productPrice = this.props.Products[indexOfProduct].PriceUsd;
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
        this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].Photo, this.props.Products[indexOfProduct].PriceUsd, this.props.Products[indexOfProduct].DeviceName, this.props.Products[indexOfProduct].Quantity)
        }else{
            this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].Photo, this.props.Products[indexOfProduct].PriceUsd, this.props.Products[indexOfProduct].DeviceName, this.props.Products[indexOfProduct].Quantity)
        }
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
        console.log(indexOfProduct)
     
        
        return (

            <div>
               <div>
                <section className="phoneProperty">
                    <section className="phoneImg">
                        {/* {this.props.Products[this.props.idOfProduct].Photo.includes('blob') ?
                            <Img src={this.props.Products[this.props.idOfProduct].Photo} /> : <img src={require(`./${this.props.Products[this.props.idOfProduct].Photo}`)} />} */}
                            <img src={this.props.Products[indexOfProduct].Photo} onClick={this.testt} alt=""/>
                    </section>
                    <section className='phoneDetails'>
                    {/* <div>{this.props.Products}</div> */}
                        <div className='deviceName'>{this.props.Products[indexOfProduct].DeviceName}</div>
                        <div className='price'>Price: {this.maniek(this.props.currency)} {this.props.currency}</div>
                            <div className="seller">Seller: Marian</div>
                        {/* <div className='quantity'>item quantity</div> */}
                        <div className="condition">Condition: New</div>
                        <div className="userContact">Contact to seller: donatelek@gmail.com</div>
                        <div className="itemDescription">Description: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deleniti quibusdam voluptate ipsam error similique eum delectus quaerat, ab, commodi laudantium aliquam nobis, corrupti placeat expedita quae inventore recusandae corporis?</span></div>
                        <div className="shipping">Shipping: Worldwide</div>
                        <button className="addToCart" onClick={this.buttonLoader}>Add to cart</button>
                        
                        {/* <button onClick={() => this.props.handleAddToCart(this.props.Products[this.props.idOfProduct].id, this.props.Products[this.props.idOfProduct].Photo, this.props.Products[this.props.idOfProduct].PriceUsd, this.props.Products[this.props.idOfProduct].DeviceName, this.props.Products[this.props.idOfProduct].Quantity)} disabled=
                            {this.props.Products[this.props.idOfProduct].AddedToCart ? true : false}
                        >add to cart</button> */}
                       
                        {/* <div class="addToCart">

                            <div class={this.state.showOptionsButton ? 'btn_wrapper bought' : 'btn_wrapper'}>
                                <button onClick={this.buttonLoader} type="button" title="Bestel eenvoudig & snel" className={this.state.buttonActive ? 'button btn-cart loader' : 'button btn-cart'}>
                                    <span>
                                        <i class="fa fa-shopping-cart"></i>
                                        <i class="fa fa-arrow-down"></i>
                                        <span>Add to shopping cart</span>
                                    </span>
                                    <div class="spinner"></div>
                                </button>
                                <a href="#" class="cart">
                                    <span>
                                        <i class="fa fa-shopping-bag"></i><span>View Cart</span>
                                    </span>
                                </a>
                                <a href="#" class="checkout">
                                    <span>
                                        <i class="fa fa-lock"></i>
                                        <span>Checkout</span>
                                    </span>
                                </a>
                            </div>
                        </div> */}
                        {/* <h1>Specification:</h1> */}
                        {/* <div className='specification'>
                            <div>Brand: {this.state.buraczek.Brand}</div>
                            <div>Battery: {this.state.buraczek.battery_c}</div>
                            <div>Weight: {this.state.buraczek.weight}</div>
                            <div>Produced: {this.state.buraczek.announced}</div>
                            <div>Size: {this.state.buraczek.size}</div>
                            <div>Sim Card Slot: {this.state.buraczek.sim}</div>
                            <div>Sensors: {this.state.buraczek.sensors}</div>
                            <div>Screen Resolution: {this.state.buraczek.resolution}</div>
                            <div>Screen Protection: {this.state.buraczek.protection}</div>
                            <div>OS: {this.state.buraczek.os}</div>
                            <div>GPU: {this.state.buraczek.gpu}</div>
                            <div>Size: {this.state.buraczek.dimensions}</div>
                            <div>CPU: {this.state.buraczek.cpu}</div>
                            <div>Cores: {this.state.buraczek.chipset}</div>
                            <div>SD Card Slot: {this.state.buraczek.card_slot}</div>
                            <div>Bluetooth: {this.state.buraczek.bluetooth}</div>
                        </div> */}
                    </section>
                </section>
                
                <section className='recommendedProducts'>
                <h1 className='recommendedProductsTitle'>You may also like</h1>
                   <ul>
                        <li><div className='deviceName'>{this.props.Products[this.props.shuffle[0]].DeviceName}</div>
                       <img src={this.props.Products[this.props.shuffle[0]].Photo} /></li>
                            
                            
                   
                   
                       <li><div className='deviceName'>{this.props.Products[this.props.shuffle[1]].DeviceName}</div>
                        <img src={this.props.Products[this.props.shuffle[1]].Photo} /></li>
                            

                  
                        <li> <div className='deviceName'>{this.props.Products[this.props.shuffle[2]].DeviceName}</div>
                       <img src={this.props.Products[this.props.shuffle[2]].Photo} /></li>
                            

                   
                  
                       <li><div className='deviceName'>{this.props.Products[this.props.shuffle[3]].DeviceName}</div>
                        <img src={this.props.Products[this.props.shuffle[3]].Photo} /></li>
                           
                        </ul>
                    
                </section>
                </div>
            </div>
        );
    }
}

export default withRouter(PhoneProperties);