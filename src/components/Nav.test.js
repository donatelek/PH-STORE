import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav'

configure({ adapter: new Adapter() });

const defaultProps = {
    Cart: [],
    currencyToChoose: ['USD', 'EUR', 'PLN', 'BTC'],
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Nav {...setupProps} />)
};

describe('<Nav/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Nav, defaultProps);
    });
    it('render nav cart', () => {
        const navCart = findByTestAttr(wrapper, 'navCart');
        expect(navCart.text()).toBe('<Link />');
    })
    it('render proper currencies', () => {
        const currencyToChoose1 = findByTestAttr(wrapper, 'currencyToChoose1');
        const currencyToChoose2 = findByTestAttr(wrapper, 'currencyToChoose2');
        const currencyToChoose3 = findByTestAttr(wrapper, 'currencyToChoose3');
        const currencyToChoose4 = findByTestAttr(wrapper, 'currencyToChoose4');
        expect(currencyToChoose1.text()).toBe('USD');
        expect(currencyToChoose2.text()).toBe('EUR');
        expect(currencyToChoose3.text()).toBe('PLN');
        expect(currencyToChoose4.text()).toBe('BTC');
    })
    it('render nav blur', () => {
        wrapper.setProps({ showHamburger: true })
        const navBlur = findByTestAttr(wrapper, 'navBlur');
        expect(navBlur).toHaveLength(1);
    })
    it('does not render nav blur', () => {
        wrapper.setProps({ showHamburger: false })
        const navBlur = findByTestAttr(wrapper, 'navBlur');
        expect(navBlur).toHaveLength(0);
    })
    it('render hamburger nav in mobile', () => {
        wrapper.setProps({ showHamburger: true })
        const hamburgerNavMobile = findByTestAttr(wrapper, 'hamburgerNavMobile');
        expect(hamburgerNavMobile).toHaveLength(1);
    })
    it('does not render hamburger nav in mobile', () => {
        wrapper.setProps({ showHamburger: false })
        const hamburgerNavMobile = findByTestAttr(wrapper, 'hamburgerNavMobile');
        expect(hamburgerNavMobile).toHaveLength(0);
    })
    it('render hamburger nav in desktop', () => {
        wrapper.setProps({ showHamburger: false })
        const hamburgerNav = findByTestAttr(wrapper, 'hamburgerNav');
        expect(hamburgerNav).toHaveLength(1);
    })
    it('does not render hamburger nav in desktop', () => {
        wrapper.setProps({ showHamburger: true })
        const hamburgerNav = findByTestAttr(wrapper, 'hamburgerNav');
        expect(hamburgerNav).toHaveLength(0);
    })
})