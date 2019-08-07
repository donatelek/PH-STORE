import React from 'react';
import { findByTestAttr, checkProps } from '../tests/testsutils';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Feedback from './Feedback'
configure({ adapter: new Adapter() });


const defaultProps = {};
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Feedback {...setupProps} />)
};

describe('<Feedback/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup();
    });
    it('does not throw warning with expected props', () => {
        checkProps(Feedback, defaultProps);
    });
    it('does not show errors', () => {
        wrapper.setState({
            errors: {
                name: false,
                feedback: false
            }
        })
        const nameError = findByTestAttr(wrapper, 'nameError');
        const feedbackError = findByTestAttr(wrapper, 'feedbackError');
        expect(nameError).toHaveLength(0);
        expect(feedbackError).toHaveLength(0);
    })
    it('show send errors', () => {
        wrapper.setState({
            errors: {
                name: true,
                feedback: true
            }
        })
        const nameError = findByTestAttr(wrapper, 'nameError');
        const feedbackError = findByTestAttr(wrapper, 'feedbackError');
        expect(nameError.text()).toBe('Enter your name');
        expect(feedbackError.text()).toBe('Enter your feedback');
    })
    it('render proper length of feedback names', () => {
        wrapper.setState({
            feedbacks: [
                {
                    feedback: 'test',
                    name: 'test'
                },
                {
                    feedback: 'test',
                    name: 'test'
                },
                {
                    feedback: 'test',
                    name: 'test'
                },
            ]
        })
        const userFeedbackName = findByTestAttr(wrapper, 'userFeedbackName');
        expect(userFeedbackName).toHaveLength(3);
    })
    it('render proper length of feedback comments', () => {
        wrapper.setState({
            feedbacks: [
                {
                    feedback: 'test',
                    name: 'test'
                },
                {
                    feedback: 'test',
                    name: 'test'
                },
                {
                    feedback: 'test',
                    name: 'test'
                },
            ]
        })
        const userFeedbackComments = findByTestAttr(wrapper, 'userFeedbackComments');
        expect(userFeedbackComments).toHaveLength(3);
    })
})