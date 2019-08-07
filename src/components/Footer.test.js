import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer'
configure({ adapter: new Adapter() });


const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Footer {...setupProps} />)
};

describe('<Footer/>', () => {
    let wrapper
    it('does not throw warning with expected props', () => {
        checkProps(Footer, defaultProps);
    });
    it('render proper navigation elements', () => {
        wrapper = setup()
        const terms = findByTestAttr(wrapper, 'terms');
        const deliv = findByTestAttr(wrapper, 'deliv');
        const feed = findByTestAttr(wrapper, 'feed');
        const contact = findByTestAttr(wrapper, 'contact');
        expect(terms).toHaveLength(1);
        expect(deliv).toHaveLength(1);
        expect(feed).toHaveLength(1);
        expect(contact).toHaveLength(1);
    })

})