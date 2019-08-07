import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainSite from './MainSite'

configure({ adapter: new Adapter() });

const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<MainSite {...setupProps} />)
};

describe('<MainSite/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(MainSite, defaultProps);
    });
})