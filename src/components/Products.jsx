import React, { Component } from 'react';
import math from 'mathjs'
import Img from 'react-image';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Products extends Component {
    state = {}


handleActiveButton=(id)=>{

    const Cart=this.props.Cart;
    const product=Cart.find(item=>{
        return item.id===id
    })
  
    const indexOfProduct = Cart.indexOf(product)

   if(indexOfProduct===-1){
      return false
   }else{
       return true
   }
}
  

    render() {


        return (
            <>
                {this.props.currency === 'USD' && <div key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>

                        <img className="devicePhoto" src={this.props.Photo} alt=""/>

                    <h1 className='deviceName'>{this.props.DeviceName}</h1>
                    <h2 className='devicePrice'>{this.props.PriceUsd + ' '+this.props.currency}</h2>
                  
                </Link>
                    <button className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i class="fas fa-cart-plus"></i>}</button>
               
                </div>}

                {/* {this.props.currency === 'EUR' && <div key={this.props.id}><Link onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>

                    {this.props.Photo.includes('blob') ? <Img src={this.props.Photo} /> : <img src={require(`./${this.props.Photo}`)} />}

                    <h1 className='deviceName'>{`${this.props.DeviceName}: ${Math.round(this.props.PriceUsd * this.props.EUR)} ${this.props.currency}`}</h1>



                    <button onClick={() => this.props.handleAddToCart(this.props.id, this.props.Photo, this.props.PriceUsd, this.props.DeviceName, this.props.Quantity)} className='addToCart' disabled={this.props.AddedToCart ? true : false}>Add to cart</button>
                   
                </Link>
                </div >} */}
                {this.props.currency === 'EUR' && <div key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>

<img className="devicePhoto" src={this.props.Photo} alt=""/>

<h1 className='deviceName'>{this.props.DeviceName}</h1>
<h2 className='devicePrice'>{Math.round(this.props.PriceUsd * this.props.EUR)} {this.props.currency}</h2>

</Link>
<button className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i class="fas fa-cart-plus"></i>}</button>

</div>}
                {/* {this.props.currency === 'PLN' && <div key={this.props.id}><Link onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    {this.props.Photo.includes('blob') ? <Img src={this.props.Photo} /> : <img src={require(`./${this.props.Photo}`)} />}
                    
                    <h1 className='deviceName'>{`${this.props.DeviceName}: ${Math.round(this.props.PriceUsd * this.props.PLN)} ${this.props.currency}`}</h1>

                    <button onClick={() => this.props.handleAddToCart(this.props.id, this.props.Photo, this.props.PriceUsd, this.props.DeviceName, this.props.Quantity)} className='addToCart' disabled={this.props.AddedToCart ? true : false}>Add to cart</button>
                    <i class="fas fa-cart-plus"></i>
                    
                </Link>
                </div >} */}
                 {this.props.currency === 'PLN' && <div key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>

<img className="devicePhoto" src={this.props.Photo} alt=""/>

<h1 className='deviceName'>{this.props.DeviceName}</h1>
<h2 className="devicePrice">{Math.round(this.props.PriceUsd * this.props.PLN)} {this.props.currency}</h2>
</Link>
<button className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i class="fas fa-cart-plus"></i>}</button>

</div>}
                {/* {this.props.currency === 'BTC' && <div key={this.props.id}><Link onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    {this.props.Photo.includes('blob') ? <Img src={this.props.Photo} /> : <img src={require(`./${this.props.Photo}`)} />}

                    <h1 className='deviceName'>{`${this.props.DeviceName}: ${math.round(this.props.PriceUsd * this.props.BTC, 4)} ${this.props.currency}`}</h1>

                    <button onClick={() => this.props.handleAddToCart(this.props.id, this.props.Photo, this.props.PriceUsd, this.props.DeviceName, this.props.Quantity)} className='addToCart' disabled={this.props.AddedToCart ? true : false}>Add to cart</button>
                   
                </Link>
                </div >} */}

{this.props.currency === 'BTC' && <div key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>

<img className="devicePhoto" src={this.props.Photo} alt=""/>

<h1 className='deviceName'>{this.props.DeviceName}</h1>
<h2 className="devicePrice">{math.round(this.props.PriceUsd * this.props.BTC, 4)} {this.props.currency}</h2>
</Link>
<button className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i class="fas fa-cart-plus"></i>}</button>

</div>}
            </>
        );
    }
}

export default Products;
