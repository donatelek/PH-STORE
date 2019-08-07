import React from 'react';
import SecondSection from './SecondSection'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search'
import Pagination from './Pagination'

configure({ adapter: new Adapter() });

const defaultProps = {
    match: {
        path: 'test',
        params: {
            id: 5
        }
    }
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<SecondSection {...setupProps} />)
};

describe('<SecondSection/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(SecondSection, defaultProps);
    });
    it('render Search component', () => {
        expect(wrapper.find(Search)).toHaveLength(1)
    })
    it('render Pagination component', () => {
        expect(wrapper.find(Pagination)).toHaveLength(1)
    })
})