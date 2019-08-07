import React, { Component } from 'react';
import math from 'mathjs'
import '../Styles/PhoneProperties.css';
import PropTypes from 'prop-types';
class PhoneProperties extends Component {
    state = {
        randomProducts: null,
        buttonActive: false,
        showOptionsButton: false,
        propertiesFromApi: this.props.propertiesFromApi,
        indexOfElement: ''
    }

    componentDidMount() {
        this.setState({
            indexOfElement: this.props.location.pathname.replace('/properties/', '')
        })
        try {
            window.scrollTo(0, 0)

        } catch (err) {

        }
        let indexOfElement = this.props.location.pathname;
        indexOfElement = indexOfElement.replace('/properties/', '')
        if (!this.props.idOfProduct) {
            this.setState({
                indexOfElement
            })
        }


    }

    handleActiveButton = () => {
        let idOfElement = this.props.location.pathname;
        idOfElement = idOfElement.replace('/properties/', '');
        const finalId = Number(idOfElement)
        const Cart = this.props.Cart;
        const product = Cart.find(item => {
            return item.id === finalId
        })
        const indexOfProduct = Cart.indexOf(product)
        if (indexOfProduct === -1) {
            return false
        } else {
            return true
        }
    }

    handleProductPrice = (currency) => {
        let idOfElement = this.props.location.pathname;
        idOfElement = idOfElement.replace('/properties/', '');
        const finalId = Number(idOfElement)
        const Products = this.props.Products;
        const product = Products.find(item => {
            return item.id === finalId
        })
        const indexOfProduct = Products.indexOf(product)
        if (this.props.idOfProduct) {
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
            }
        } else {
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
            }
        }
    }

    buttonLoader = () => {
        let idOfElement = this.props.location.pathname;
        idOfElement = idOfElement.replace('/properties/', '');
        const finalId = Number(idOfElement)
        const Products = this.props.Products;
        const product = Products.find(item => {
            return item.id === finalId
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
        if (this.props.idOfProduct) {
            this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].photo, this.props.Products[indexOfProduct].priceusd, this.props.Products[indexOfProduct].devicename, this.props.Products[indexOfProduct].quantity)
        } else {
            this.props.handleAddToCart(this.props.Products[indexOfProduct].id, this.props.Products[indexOfProduct].photo, this.props.Products[indexOfProduct].priceusd, this.props.Products[indexOfProduct].devicename, this.props.Products[indexOfProduct].quantity)
        }
    }

    handleChangeProductFromRecommended = (index) => {
        const Products = this.props.Products
        const Product = Products[index]
        const id = Product.id;
        this.props.setIdOfProduct(id)
        this.props.history.push(`/properties/${id}`)
        window.scrollTo(0, 0)
    }

    render() {
        let idOfElement = this.props.location.pathname;
        idOfElement = idOfElement.replace('/properties/', '');
        const finalId = Number(idOfElement)
        const Products = this.props.Products;
        const product = Products.find(item => {
            return item.id === finalId
        })
        const indexOfProduct = Products.indexOf(product)
        const userEmail = this.props.Products[indexOfProduct].email;
        const removeChar = userEmail.indexOf('@');
        const sellerName = userEmail.substring(0, removeChar)

        return (
            <div style={{ overflowX: 'hidden' }}>
                <div>
                    <section className="phoneProperty">
                        <section className="phoneImg">
                            <img data-test='productImg' src={this.props.Products[indexOfProduct].photo} onClick={this.testt} alt="product" />
                        </section>
                        <section className='phoneDetails'>
                            <div data-test='deviceName' className='deviceName'>{this.props.Products[indexOfProduct].devicename}</div>
                            <img data-test='productImgMobile' src={this.props.Products[indexOfProduct].photo} onClick={this.testt} alt="product" />
                            <div data-test='devicePrice' className='price'>Price: {this.handleProductPrice(this.props.currency)} {this.props.currency}</div>
                            <div data-test='sellerName' className="seller">Seller: {sellerName}</div>
                            <div data-test='conditionProduct' className="condition">Condition: {this.props.Products[indexOfProduct].condition}</div>
                            <div data-test='userContact' className="userContact">Contact to seller: {this.props.Products[indexOfProduct].email}</div>
                            <div data-test='itemDescription' className="itemDescription">Description: <span>{this.props.Products[indexOfProduct].description}</span></div>
                            <div className="shipping">Shipping: Worldwide</div>
                            <button data-test='addToCartButton' className="addToCart" disabled={this.handleActiveButton()} onClick={() => {
                                this.buttonLoader()
                                this.handleActiveButton()
                            }}>{this.handleActiveButton(this.props.id) ? 'In Cart' : 'Add to cart'}</button>
                        </section>
                    </section>

                    <section className='recommendedProducts'>
                        <h1 className='recommendedProductsTitle'>You may also like</h1>
                        <ul>
                            <li onClick={() => this.handleChangeProductFromRecommended(this.props.shuffle[0])}>
                                <div data-test='shuffledProductName1' className='deviceName'>{this.props.Products[this.props.shuffle[0]].devicename}</div>
                                <img data-test='shuffledProductImg1' src={this.props.Products[this.props.shuffle[0]].photo} alt='product' />
                            </li>
                            <li onClick={() => this.handleChangeProductFromRecommended(this.props.shuffle[1])}><div className='deviceName' data-test='shuffledProductName2' >{this.props.Products[this.props.shuffle[1]].devicename}</div>
                                <img data-test='shuffledProductImg2' src={this.props.Products[this.props.shuffle[1]].photo} alt='product' /></li>
                            <li onClick={() => this.handleChangeProductFromRecommended(this.props.shuffle[2])}> <div className='deviceName' data-test='shuffledProductName3' >{this.props.Products[this.props.shuffle[2]].devicename}</div>
                                <img data-test='shuffledProductImg3' src={this.props.Products[this.props.shuffle[2]].photo} alt='product' /></li>
                            <li onClick={() => this.handleChangeProductFromRecommended(this.props.shuffle[3])}>
                                <div className='deviceName' data-test='shuffledProductName4' >{this.props.Products[this.props.shuffle[3]].devicename}</div>
                                <img data-test='shuffledProductImg4' src={this.props.Products[this.props.shuffle[3]].photo} alt='product' />
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

PhoneProperties.propTypes = {
    Products: PropTypes.arrayOf(PropTypes.object),
    handleAddToCart: PropTypes.func,
    idOfProduct: PropTypes.number,
    shuffle: PropTypes.arrayOf(PropTypes.number),
    EUR: PropTypes.number,
    BTC: PropTypes.number,
    PLN: PropTypes.number,
    currency: PropTypes.string,
    setIdOfProduct: PropTypes.func,
    Cart: PropTypes.arrayOf(PropTypes.object),
};

export default PhoneProperties;