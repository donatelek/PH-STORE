import React from 'react';
import BitcoinPayment from './BitcoinPayment'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
    Subtotal: () => { },
    handleShowBitcoinPayment: () => { }
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<BitcoinPayment {...setupProps} />)
};
it('does not throw warning with expected props', () => {
    checkProps(BitcoinPayment, defaultProps);
});

it('render payment info if showSuccessPayment true', () => {
    const wrapper = setup()
    wrapper.setState({ showSuccessPayment: true })
    const guessedWordsNode = findByTestAttr(wrapper, 'paymentInfo');
    expect(guessedWordsNode.length).toBe(1);
})
it('Do not render payment info if showSuccessPayment false', () => {
    const wrapper = setup()
    wrapper.setState({ showSuccessPayment: false })
    const guessedWordsNode = findByTestAttr(wrapper, 'paymentInfo');
    expect(guessedWordsNode.length).toBe(0);
})
