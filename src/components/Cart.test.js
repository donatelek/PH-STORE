import React from 'react';
import Cart from './Cart'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BitcoinPayment from './BitcoinPayment'
configure({ adapter: new Adapter() });


const defaultProps = {
    igrek: () => { },
    updatingCart: () => { }
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Cart {...setupProps} />)
};


describe('<Cart/>', () => {
    let wrapper

    describe('itemsAddedToCart', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup({ Cart: [] });
        });
        it('does not throw warning with expected props', () => {
            checkProps(Cart, defaultProps);
        })
        it('render your cart is empty if itemsAddedToCart = 0', () => {
            wrapper.setState({ ItemsAddedToCart: [] })
            const cartTitle = findByTestAttr(wrapper, 'cartTitle');
            expect(cartTitle.text()).toBe('Your cart is empty');
        })
        it('render Your Cart: if itemsAddedToCart <0', () => {
            wrapper.setState({ ItemsAddedToCart: [{ test: 'test' }] })
            const cartTitle = findByTestAttr(wrapper, 'cartTitle');
            expect(cartTitle.text()).toBe('Your Cart:');
        })
    })
    describe('currency', () => {
        let wrapper
        it('render USD currency in discount', () => {
            wrapper = setup({ currency: 'USD', Cart: [] });
            const discount = findByTestAttr(wrapper, 'discount');
            expect(discount.text()).toBe('-0 USD');
        })

        it('render EUR currency in discount', () => {
            wrapper = setup({ currency: 'EUR', Cart: [] });
            const discount = findByTestAttr(wrapper, 'discount');
            expect(discount.text()).toBe('-0 EUR');
        })
        it('render PLN currency in discount', () => {
            wrapper = setup({ currency: 'PLN', Cart: [] });
            const discount = findByTestAttr(wrapper, 'discount');
            expect(discount.text()).toBe('-0 PLN');
        })
        it('render BTC currency in discount', () => {
            wrapper = setup({ currency: 'BTC', Cart: [] });
            const discount = findByTestAttr(wrapper, 'discount');
            expect(discount.text()).toBe('-0 BTC');
        })
        it('render EUR currency in subtotal', () => {
            wrapper = setup({ currency: 'EUR', Cart: [] });
            const subtotal = findByTestAttr(wrapper, 'subtotal');
            expect(subtotal.text()).toBe('Subtotal: 0.00 EUR');
        })
        it('render BTC currency in subtotal', () => {
            wrapper = setup({ currency: 'BTC', Cart: [] });
            const subtotal = findByTestAttr(wrapper, 'subtotal');
            expect(subtotal.text()).toBe('Subtotal: 0.00 BTC');
        })
        it('render PLN currency in subtotal', () => {
            wrapper = setup({ currency: 'PLN', Cart: [] });
            const subtotal = findByTestAttr(wrapper, 'subtotal');
            expect(subtotal.text()).toBe('Subtotal: 0.00 PLN');
        })
        it('render paypal button', () => {
            wrapper = setup({ currency: 'USD', Cart: [], USD: 1, EUR: 1, BTC: 1, PLN: 1 });
            wrapper.setState({
                ItemsAddedToCart: [{
                    condition: 'used',
                    description: 'hello',
                    devicename: 'iphone',
                    email: 'anne@',
                    id: 22,
                    photo: 'https://f00.esfr.pl/foto/1/22317618657/3f2894363f71385f0253be1cf1642187/apple-iphone-x-64gb-gwiezdna-szarosc,22317618657_7.jpg',
                    priceusd: 222,
                    quantity: '5'
                }]
            })
            const paypal = findByTestAttr(wrapper, 'paypal');
            expect(paypal).toHaveLength(1);
        })
        it('does not render paypal button', () => {
            wrapper = setup({ currency: 'BTC', Cart: [], USD: 1, EUR: 1, BTC: 1, PLN: 1 });
            wrapper.setState({
                ItemsAddedToCart: [{
                    condition: 'used',
                    description: 'hello',
                    devicename: 'iphone',
                    email: 'anne@',
                    id: 22,
                    photo: 'https://f00.esfr.pl/foto/1/22317618657/3f2894363f71385f0253be1cf1642187/apple-iphone-x-64gb-gwiezdna-szarosc,22317618657_7.jpg',
                    priceusd: 222,
                    quantity: '5'
                }]
            })
            const paypal = findByTestAttr(wrapper, 'paypal');
            expect(paypal).toHaveLength(0);
        })
        it('render bitcoin button', () => {
            wrapper = setup({ currency: 'BTC', Cart: [], USD: 1, EUR: 1, BTC: 1, PLN: 1 });
            wrapper.setState({
                ItemsAddedToCart: [{
                    condition: 'used',
                    description: 'hello',
                    devicename: 'iphone',
                    email: 'anne@',
                    id: 22,
                    photo: 'https://f00.esfr.pl/foto/1/22317618657/3f2894363f71385f0253be1cf1642187/apple-iphone-x-64gb-gwiezdna-szarosc,22317618657_7.jpg',
                    priceusd: 222,
                    quantity: '5'
                }]
            })
            const paypal = findByTestAttr(wrapper, 'bitcoin');
            expect(paypal).toHaveLength(1);
        })
        it('does not render bitcoin button', () => {
            wrapper = setup({ currency: 'USD', Cart: [], USD: 1, EUR: 1, BTC: 1, PLN: 1 });
            wrapper.setState({
                ItemsAddedToCart: [{
                    condition: 'used',
                    description: 'hello',
                    devicename: 'iphone',
                    email: 'anne@',
                    id: 22,
                    photo: 'https://f00.esfr.pl/foto/1/22317618657/3f2894363f71385f0253be1cf1642187/apple-iphone-x-64gb-gwiezdna-szarosc,22317618657_7.jpg',
                    priceusd: 222,
                    quantity: '5'
                }]
            })
            const paypal = findByTestAttr(wrapper, 'bitcoin');
            expect(paypal).toHaveLength(0);
        })
    })
    it('render BitcoinPayment component', () => {
        wrapper = setup({ Cart: [] });
        wrapper.setState({ showBitcoinPayment: true })
        expect(wrapper.find(BitcoinPayment)).toHaveLength(1)
    })
    it('does not render BitcoinPayment component', () => {
        wrapper = setup({ Cart: [] });
        wrapper.setState({ showBitcoinPayment: false })
        expect(wrapper.find(BitcoinPayment)).toHaveLength(0)
    })
})