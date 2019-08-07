import React from 'react';
import Register from './Register'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
    errors: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
    }
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Register {...setupProps} />)
};

describe('<Register/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Register, defaultProps);
    });
    it('does not display first name error', () => {
        const firstNameRegister = findByTestAttr(wrapper, 'firstNameRegister');
        expect(firstNameRegister.length).toEqual(0)
    })
    it('display first name error', () => {
        wrapper.setState({
            errors: {
                firstName: true
            }
        })
        const firstNameRegister = findByTestAttr(wrapper, 'firstNameRegister');
        expect(firstNameRegister.length).toEqual(1)
        expect(firstNameRegister.text()).toEqual('Do not leave this place blank')
    })
    it('does not display last name error', () => {
        const lastNameRegister = findByTestAttr(wrapper, 'lastNameRegister');
        expect(lastNameRegister.length).toEqual(0)
    })
    it('display last name error', () => {
        wrapper.setState({
            errors: {
                lastName: true
            }
        })
        const lastNameRegister = findByTestAttr(wrapper, 'lastNameRegister');
        expect(lastNameRegister.length).toEqual(1)
        expect(lastNameRegister.text()).toEqual('Do not leave this place blank')

    })
    it('does not display email error', () => {
        const emailRegister = findByTestAttr(wrapper, 'emailRegister');
        expect(emailRegister.length).toEqual(0)
    })
    it('display last name error', () => {
        wrapper.setState({
            errors: {
                email: true
            }
        })
        const emailRegister = findByTestAttr(wrapper, 'emailRegister');
        expect(emailRegister.length).toEqual(1)
        expect(emailRegister.text()).toEqual('write your proper email address')

    })
    it('does not display password error', () => {
        const passwordRegister = findByTestAttr(wrapper, 'passwordRegister');
        expect(passwordRegister.length).toEqual(0)
    })
    it('display lastpassword error', () => {
        wrapper.setState({
            errors: {
                password: true
            }
        })
        const passwordRegister = findByTestAttr(wrapper, 'passwordRegister');
        expect(passwordRegister.length).toEqual(1)
        expect(passwordRegister.text()).toEqual('password must be at least 6 letters long')

    })
})