import React, { Component } from 'react';
import math from 'mathjs'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class Products extends Component {
    state = {}

    handleActiveButton = (id) => {
        const Cart = this.props.Cart;
        const product = Cart.find(item => {
            return item.id === id
        })
        const indexOfProduct = Cart.indexOf(product)
        if (indexOfProduct === -1) {
            return false
        } else {
            return true
        }
    }

    render() {
        return (
            <>
                {this.props.currency === 'USD' && <div data-test='cardProduct1' key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    <img data-test='devicePhotoCard1' className="devicePhoto" src={this.props.photo} alt="" />
                    <h1 data-test='deviceNameCard1' className='deviceName'>{this.props.devicename}</h1>
                    <h2 data-test='devicePriceCard1' className='devicePrice'>{this.props.priceusd + ' ' + this.props.currency}</h2>
                </Link>
                    <button data-test='addToCartCard1' className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i className="fas fa-cart-plus"></i>}</button>
                </div>}

                {this.props.currency === 'EUR' && <div data-test='cardProduct2' key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    <img data-test='devicePhotoCard2' className="devicePhoto" src={this.props.photo} alt="" />
                    <h1 data-test='deviceNameCard2' className='deviceName'>{this.props.devicename}</h1>
                    <h2 data-test='devicePriceCard2' className='devicePrice'>{Math.round(this.props.priceusd * this.props.EUR)} {this.props.currency}</h2>
                </Link>
                    <button data-test='addToCartCard2' className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i className="fas fa-cart-plus"></i>}</button>
                </div>}

                {this.props.currency === 'PLN' && <div data-test='cardProduct3' key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    <img data-test='devicePhotoCard3' className="devicePhoto" src={this.props.photo} alt="" />
                    <h1 data-test='deviceNameCard3' className='deviceName'>{this.props.devicename}</h1>
                    <h2 data-test='devicePriceCard3' className="devicePrice">{Math.round(this.props.priceusd * this.props.PLN)} {this.props.currency}</h2>
                </Link>
                    <button data-test='addToCartCard3' className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i class="fas fa-cart-plus"></i>}</button>
                </div>}

                {this.props.currency === 'BTC' && <div data-test='cardProduct4' key={this.props.indexOfElement}><Link className='cardProduct' onClick={() => this.props.setIdOfProduct(this.props.id)} to={`/properties/${this.props.id}`}>
                    <img data-test='devicePhotoCard4' className="devicePhoto" src={this.props.photo} alt="" />
                    <h1 data-test='deviceNameCard4' className='deviceName'>{this.props.devicename}</h1>
                    <h2 data-test='devicePriceCard4' className="devicePrice">{math.round(this.props.priceusd * this.props.BTC, 4)} {this.props.currency}</h2>
                </Link>
                    <button data-test='addToCartCard4' className='cartIcon' onClick={() => this.props.handleAddToCart(this.props.id)} disabled={this.handleActiveButton(this.props.id)}>{this.handleActiveButton(this.props.id) ? 'In Cart' : <i className="fas fa-cart-plus"></i>}</button>
                </div>}
            </>
        );
    }
}

Products.propTypes = {
    currency: PropTypes.string,
    handleAddToCart: PropTypes.func,
    handleShowProperties: PropTypes.func,
    id: PropTypes.number,
    photo: PropTypes.string,
    devicename: PropTypes.string,
    quantity: PropTypes.string,
    AddedToCart: PropTypes.bool,
    setIdOfProduct: PropTypes.func,
    indexOfElement: PropTypes.number,
    Cart: PropTypes.arrayOf(PropTypes.object)
};

export default Products;
