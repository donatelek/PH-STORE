import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination'

configure({ adapter: new Adapter() });

const defaultProps = {
    products: [{ test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }, { test: 'test' }]
};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Pagination {...setupProps} />)
};

describe('<Pagination/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup()
    })
    it('does not throw warning with expected props', () => {
        checkProps(Pagination, defaultProps);
    });
    it('render proper number of todos', () => {
        const todos = findByTestAttr(wrapper, 'todos');
        expect(todos).toHaveLength(defaultProps.products.length);
    })
    it('render proper number of pages', () => {
        wrapper.setState({ todosPerPage: 2 })
        const pageNumber = findByTestAttr(wrapper, 'pageNumber');
        expect(pageNumber).toHaveLength(defaultProps.products.length / 2);
    })
})