import React from 'react';
import Products from './Products'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
    currency: 'USD',
    Cart: [{
        id: 17,
        email: 'asdasd@wp.pl'
    }],
    photo: 'www.test.com',
    devicename: 'xiaomi',
    priceusd: 99,
    EUR: '2',
    PLN: '3',
    BTC: '4',
    id: 17
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Products {...setupProps} />)
};

describe('<Products/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Products, defaultProps);
    });
    it('display proper card product depend on currency 1', () => {
        const cardProduct1 = findByTestAttr(wrapper, 'cardProduct1');
        expect(cardProduct1.length).toEqual(1)
    })
    it('display proper card product depend on currency 2', () => {
        wrapper.setProps({ currency: 'EUR' })
        const cardProduct2 = findByTestAttr(wrapper, 'cardProduct2');
        expect(cardProduct2.length).toEqual(1)
    })
    it('display proper card product depend on currency 3', () => {
        wrapper.setProps({ currency: 'PLN' })
        const cardProduct3 = findByTestAttr(wrapper, 'cardProduct3');
        expect(cardProduct3.length).toEqual(1)
    })
    it('display proper card product depend on currency 4', () => {
        wrapper.setProps({ currency: 'BTC' })
        const cardProduct4 = findByTestAttr(wrapper, 'cardProduct4');
        expect(cardProduct4.length).toEqual(1)
    })
    it('display proper image src 1', () => {
        const devicePhotoCard1 = findByTestAttr(wrapper, 'devicePhotoCard1');
        expect(devicePhotoCard1.prop('src')).toEqual('www.test.com')
    })
    it('display proper image src 2', () => {
        wrapper.setProps({ currency: 'EUR' })
        const devicePhotoCard2 = findByTestAttr(wrapper, 'devicePhotoCard2');
        expect(devicePhotoCard2.prop('src')).toEqual('www.test.com')
    })
    it('display proper image src 3', () => {
        wrapper.setProps({ currency: 'PLN' })
        const devicePhotoCard3 = findByTestAttr(wrapper, 'devicePhotoCard3');
        expect(devicePhotoCard3.prop('src')).toEqual('www.test.com')
    })
    it('display proper image src 4', () => {
        wrapper.setProps({ currency: 'BTC' })
        const devicePhotoCard4 = findByTestAttr(wrapper, 'devicePhotoCard4');
        expect(devicePhotoCard4.prop('src')).toEqual('www.test.com')
    })
    it('display proper device name text 1', () => {
        wrapper.setProps({ currency: 'USD' })
        const deviceNameCard1 = findByTestAttr(wrapper, 'deviceNameCard1');
        expect(deviceNameCard1.text()).toEqual('xiaomi')
    })
    it('display proper device name text 2', () => {
        wrapper.setProps({ currency: 'EUR' })
        const deviceNameCard2 = findByTestAttr(wrapper, 'deviceNameCard2');
        expect(deviceNameCard2.text()).toEqual('xiaomi')
    })
    it('display proper device name text 3', () => {
        wrapper.setProps({ currency: 'PLN' })
        const deviceNameCard3 = findByTestAttr(wrapper, 'deviceNameCard3');
        expect(deviceNameCard3.text()).toEqual('xiaomi')
    })
    it('display proper device name text 4', () => {
        wrapper.setProps({ currency: 'BTC' })
        const deviceNameCard4 = findByTestAttr(wrapper, 'deviceNameCard4');
        expect(deviceNameCard4.text()).toEqual('xiaomi')
    })
    it('display proper device price 1', () => {
        wrapper.setProps({ currency: 'USD' })
        const devicePriceCard1 = findByTestAttr(wrapper, 'devicePriceCard1');
        expect(devicePriceCard1.text()).toEqual('99 USD')
    })
    it('display proper device price 2', () => {
        wrapper.setProps({ currency: 'EUR' })
        const devicePriceCard2 = findByTestAttr(wrapper, 'devicePriceCard2');
        expect(devicePriceCard2.text()).toEqual('198 EUR')
    })
    it('display proper device price 3', () => {
        wrapper.setProps({ currency: 'PLN' })
        const devicePriceCard3 = findByTestAttr(wrapper, 'devicePriceCard3');
        expect(devicePriceCard3.text()).toEqual('297 PLN')
    })
    it('display proper device price 4', () => {
        wrapper.setProps({ currency: 'BTC' })
        const devicePriceCard4 = findByTestAttr(wrapper, 'devicePriceCard4');
        expect(devicePriceCard4.text()).toEqual('396 BTC')
    })
    it('display In Cart on add to cart button 1', () => {
        wrapper.setProps({ currency: 'USD' })
        const addToCartCard1 = findByTestAttr(wrapper, 'addToCartCard1');
        expect(addToCartCard1.text()).toEqual('In Cart')
    })
    it('display In Cart on add to cart button 2', () => {
        wrapper.setProps({ currency: 'EUR' })
        const addToCartCard2 = findByTestAttr(wrapper, 'addToCartCard2');
        expect(addToCartCard2.text()).toEqual('In Cart')
    })
    it('display In Cart on add to cart button 3', () => {
        wrapper.setProps({ currency: 'PLN' })
        const addToCartCard3 = findByTestAttr(wrapper, 'addToCartCard3');
        expect(addToCartCard3.text()).toEqual('In Cart')
    })
    it('display In Cart on add to cart button 4', () => {
        wrapper.setProps({ currency: 'BTC' })
        const addToCartCard4 = findByTestAttr(wrapper, 'addToCartCard4');
        expect(addToCartCard4.text()).toEqual('In Cart')
    })
})