import React from 'react';
import Returns from './Returns'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Returns {...setupProps} />)
};

describe('<Returns/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Returns, defaultProps);
    });
})