import React from 'react';
import Search from './Search'
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
    handleSearching: () => { }
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Search {...setupProps} />)
};

describe('<Search/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Search, defaultProps);
    });
    it('display proper value in search input', () => {
        wrapper.setState({ searchInput: 'test' })
        const searchInput = findByTestAttr(wrapper, 'searchInput');
        expect(searchInput.prop('value')).toEqual('test')
    })
})