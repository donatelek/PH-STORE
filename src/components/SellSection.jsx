import React, { Component } from 'react';
import '../Styles/SellSection.css';
import Img from 'react-image';
import PropTypes from 'prop-types';

class SellSection extends Component {
    state = {
        sell: '',
        email: '',
        price: '',
        photoUrl: '',
        imgUrl: '',
        description: '',
        submittedCorrectly: false,
        condition: 'new',
        photo: 'oneplus6.png',
        quantity: 1,
        errors: {
            sell: false,
            email: false,
            price: false,
            description: false
        }
    }

    messages = {
        sell: 'Enter what you want to sell (max 23 char.)',
        email: 'Enter a valid e-mail address',
        price: 'Enter your product price',
        description: 'Enter your product description',
        submit: 'Your item has been listed!'
    }

    handleAddItem = (props) => {
        props.handleAddItem(this.state.sell, this.state.photoUrl, this.state.price, this.state.quantity)
    }

    handleFromChange = (e) => {
        const targetId = e.target.id;
        const targetValue = e.target.value;
        this.setState({
            [targetId]: targetValue
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation()
        if (validation.correct) {
            this.handleAddItem(this.props)
            this.setState({
                errors: {
                    sell: false,
                    email: false,
                    price: false,
                    description: false
                }
            })
            fetch('https://ph-store-server.herokuapp.com/addproduct', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    devicename: this.state.sell,
                    email: this.state.email,
                    condition: this.state.condition,
                    priceusd: this.state.price,
                    description: this.state.description,
                    quantity: this.state.quantity,
                    photo: this.state.imgUrl
                })
            }).then(res => res.json()).then(res => {
                this.props.fetchingProducts()
                this.setState({
                    submittedCorrectly: true,
                    sell: '',
                    email: '',
                    price: '',
                    quantity: 1,
                    condition: 'new',
                    description: '',
                    imgUrl: ''
                })
                setTimeout(() => {
                    this.setState({
                        submittedCorrectly: false
                    })
                }, 4000)
            })
        } else {
            this.setState({
                errors: {
                    sell: !validation.sell,
                    email: !validation.email,
                    price: !validation.price,
                    description: !validation.description
                }
            })
        }
    }

    formValidation() {
        let sell = false;
        let email = false;
        let price = false;
        let description = false;
        let correct = false
        if (this.state.sell.length > 0 && this.state.sell.length < 24) {
            sell = true;
        }
        if (this.state.email.includes('@')) {
            email = true
        }
        if (this.state.price.length > 0) {
            price = true
        }
        if (this.state.description.length > 19) {
            description = true
        }
        if (sell && email && price && description) {
            correct = true
        }
        return ({ sell, email, price, description, correct })
    }

    test = (e) => {
        this.setState({
            imgUrl: e.target.value
        })
    }

    render() {
        return (
            <section className='sellItem' style={{ overflowX: 'hidden' }}>
                <div className="wrap center">
                    <form onSubmit={this.handleSubmit} >
                        <h1>Sell Your Item</h1>
                        <div className="wrap-label">
                            <label onChange={this.handleFromChange} htmlFor="name">What do you want to sell?</label>
                            <br />
                            {this.state.errors.sell && <span data-test='sellErrorSell' className='error'>{this.messages.sell}</span>}
                        </div>
                        <input onChange={this.handleFromChange} type="text" id="sell" value={this.state.sell} spellCheck="false" />
                        <div className="wrap-label">
                            <label htmlFor="name">Email</label>
                            <br />
                            {this.state.errors.email && <span data-test='emailErrorSell' className='error'>{this.messages.email}</span>}
                        </div>
                        <input onChange={this.handleFromChange} type="email" id="email" value={this.state.email} spellCheck="false" />
                        <div className="wrap-label">
                            <label htmlFor="name">Price</label>
                            <br />
                            {this.state.errors.price && <span data-test='priceErrorSell' className='error'>{this.messages.price}</span>}
                        </div>
                        <input value={this.state.price} type="number" id="price" onChange={this.handleFromChange} spellCheck="false" />
                        <div className="wrap-label">
                            <label htmlFor="name">Quantity</label>
                        </div>
                        <input onChange={this.handleFromChange} type="quantity" id="quantity" value={this.state.quantity} spellCheck="false" />
                        <div className="wrap-label">
                            <label htmlFor="condition">Condition</label>
                        </div>
                        <select onChange={this.handleFromChange} name="condition" id="condition">
                            <option value="new">New</option>
                            <option value="used">Used</option>
                            <option value="damaged">Damaged</option>
                        </select>
                        <div className="wrap-label">
                            <label htmlFor="name">Description</label>
                            <br />
                            {this.state.errors.description && <span data-test='descriptionErrorSell' className='error'>{this.messages.description}</span>}
                        </div>
                        <textarea value={this.state.description} type="text" id="description" onChange={this.handleFromChange} spellCheck="false" />
                        <div className="wrap-label">
                            <label htmlFor="">Image Url</label>
                        </div>
                        <input type="text" onChange={this.test} value={this.state.imgUrl} spellCheck="false" />
                        <br />
                        <Img src={this.state.imgUrl} className='uploadedImg' />
                        <br />
                        {this.state.submittedCorrectly && <span data-test='submittedCorrectlySell' className='error'>{this.messages.submit}</span>}
                        <br />
                        <button type="submit" className='submitSell'>Submit</button>
                    </form>
                </div>
            </section >
        );
    }
}

SellSection.propTypes = {
    handleAddItem: PropTypes.func,
    fetchingProducts: PropTypes.func
};

export default SellSection;