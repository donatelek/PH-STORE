import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact'
configure({ adapter: new Adapter() });


const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Contact {...setupProps} />)
};
describe('<Contact/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({});
    });
    it('does not throw warning with expected props', () => {
        checkProps(Contact, defaultProps);
    });
    it('show email, message error', () => {
        wrapper.setState({
            errors: {
                name: true,
                feedback: true
            }
        })
        const emailError = findByTestAttr(wrapper, 'emailError');
        const messageError = findByTestAttr(wrapper, 'messageError');
        expect(emailError.text()).toBe('Enter proper email address');
        expect(messageError.text()).toBe('Your message must be at least 12 letters long');
    })
    it('does not show errors', () => {
        wrapper.setState({
            errors: {
                name: false,
                feedback: false
            }
        })
        const emailError = findByTestAttr(wrapper, 'emailError');
        const messageError = findByTestAttr(wrapper, 'messageError');
        expect(emailError).toHaveLength(0);
        expect(messageError).toHaveLength(0);
    })
    it('show message sent ', () => {
        wrapper.setState({
            formEmailSent: true
        })
        const messageSent = findByTestAttr(wrapper, 'messageSent');
        expect(messageSent).toHaveLength(1);
    })
    it('does not show message sent', () => {
        wrapper.setState({
            formEmailSent: false
        })
        const messageSent = findByTestAttr(wrapper, 'messageSent');
        expect(messageSent).toHaveLength(0);
    })
})