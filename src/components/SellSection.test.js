import React from 'react';
import SellSection from './SellSection'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
    errors: {
        sell: false,
        email: false,
        price: false,
        description: false
    },
    submittedCorrectly: false
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SellSection {...setupProps} />)
};

describe('<SellSection/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(SellSection, defaultProps);
    });
    it('does not show sell item error', () => {
        const sellErrorSell = findByTestAttr(wrapper, 'sellErrorSell');
        expect(sellErrorSell.length).toEqual(0)
    })
    it('show proper sell item error', () => {
        wrapper.setState({
            errors: {
                sell: true
            }
        })
        const sellErrorSell = findByTestAttr(wrapper, 'sellErrorSell');
        expect(sellErrorSell.length).toEqual(1)
        expect(sellErrorSell.text()).toEqual('Enter what you want to sell (max 23 char.)')
    })
    it('does not show email error', () => {
        const emailErrorSell = findByTestAttr(wrapper, 'emailErrorSell');
        expect(emailErrorSell.length).toEqual(0)
    })
    it('show proper email error', () => {
        wrapper.setState({
            errors: {
                email: true
            }
        })
        const emailErrorSell = findByTestAttr(wrapper, 'emailErrorSell');
        expect(emailErrorSell.length).toEqual(1)
        expect(emailErrorSell.text()).toEqual('Enter a valid e-mail address')
    })
    it('does not show price error', () => {
        const priceErrorSell = findByTestAttr(wrapper, 'priceErrorSell');
        expect(priceErrorSell.length).toEqual(0)
    })
    it('show proper price error', () => {
        wrapper.setState({
            errors: {
                price: true
            }
        })
        const priceErrorSell = findByTestAttr(wrapper, 'priceErrorSell');
        expect(priceErrorSell.length).toEqual(1)
        expect(priceErrorSell.text()).toEqual('Enter your product price')
    })
    it('does not show description error', () => {
        const descriptionErrorSell = findByTestAttr(wrapper, 'descriptionErrorSell');
        expect(descriptionErrorSell.length).toEqual(0)
    })
    it('show proper description error', () => {
        wrapper.setState({
            errors: {
                description: true
            }
        })
        const descriptionErrorSell = findByTestAttr(wrapper, 'descriptionErrorSell');
        expect(descriptionErrorSell.length).toEqual(1)
        expect(descriptionErrorSell.text()).toEqual('Enter your product description')
    })
    it('does not show submitted correctly error', () => {
        const submittedCorrectlySell = findByTestAttr(wrapper, 'submittedCorrectlySell');
        expect(submittedCorrectlySell.length).toEqual(0)
    })
    it('show proper submitted correctly error', () => {
        wrapper.setState({
            submittedCorrectly: true
        })
        const submittedCorrectlySell = findByTestAttr(wrapper, 'submittedCorrectlySell');
        expect(submittedCorrectlySell.length).toEqual(1)
        expect(submittedCorrectlySell.text()).toEqual('Your item has been listed!')
    })
})