import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login'
configure({ adapter: new Adapter() });

const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Login {...setupProps} />)
};

describe('<Login/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Login, defaultProps);
    });
    it('does not show login errors', () => {
        wrapper.setState({
            errors: {
                email: false,
                password: false
            }
        })
        const loginError = findByTestAttr(wrapper, 'loginError');
        expect(loginError).toHaveLength(0);
    })
    it('show login email error', () => {
        wrapper.setState({
            errors: {
                email: true,
                password: false
            }
        })
        const loginError = findByTestAttr(wrapper, 'loginError');
        expect(loginError).toHaveLength(1);
        expect(loginError.text()).toBe('User with those credentials does not exist');

    })
    it('show login password error', () => {
        wrapper.setState({
            errors: {
                email: false,
                password: true
            }
        })
        const loginError = findByTestAttr(wrapper, 'loginError');
        expect(loginError).toHaveLength(1);
        expect(loginError.text()).toBe('User with those credentials does not exist');
    })

})