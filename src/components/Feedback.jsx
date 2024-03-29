import React, { Component } from 'react';
import '../Styles/Feedback.css'
class Feedback extends Component {
    state = {
        name: '',
        feedback: '',
        feedbacks: [],
        feedbackSent: false,
        errors: {
            name: false,
            feedback: false
        }
    }

    UNSAFE_componentWillMount() {
        try {
            fetch('https://ph-store-server.herokuapp.com/feedback', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(res => res.json()).then(res => {
                this.setState({
                    feedbacks: res
                })
            }).catch(err => console.log(err))
        } catch (err) {

        }

    }

    componentDidMount() {
        try {
            window.scrollTo(0, 0)
        } catch (err) {

        }
    }

    messages = {
        name: 'Enter your name',
        feedback: 'Enter your feedback'
    }

    handleInputChange = (e) => {
        let value = e.target.value;
        if (e.target.name === 'name') {
            this.setState({
                name: value
            })
        }
        if (e.target.name === 'text') {
            this.setState({
                feedback: value
            })
        }
    }

    formValidation() {
        let name = false;
        let feedback = false;
        let correct = false
        if (this.state.name.length > 0) {
            name = true;
        }
        if (this.state.feedback.length > 0) {
            feedback = true;
        }
        if (feedback && name) {
            correct = true
        }
        return ({ feedback, name, correct })
    }

    handleFeedbackSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation()
        if (validation.correct) {
            this.setState({
                errors: {
                    name: false,
                    feedback: false,
                }
            })
            const feedbacks = this.state.feedbacks
            feedbacks.unshift({ name: this.state.name, comment: this.state.feedback })
            this.setState({
                feedbacks
            })
            fetch('https://ph-store-server.herokuapp.com/addfeedback', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.name,
                    feedback: this.state.feedback
                })
            }).then(res => res.json()).then(res => {
                this.setState({
                    feedback: res,
                    feedbackSent: true,
                    name: ''
                })
                setTimeout(() => {
                    this.setState({
                        feedbackSent: false
                    })
                }, 4000)
            })
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    feedback: !validation.feedback,
                }
            })
        }
    }
    render() {
        const feedbacks = this.state.feedbacks.map((feedback, index) => {
            return (
                <div key={index}>
                    <h1 className='userFeedbackName' data-test='userFeedbackName' >{feedback.name}</h1>
                    {feedback.feedback && <article data-test='userFeedbackComments' className='userFeedback'>{feedback.feedback}</article>}
                    {feedback.comment && <article className='userFeedback'>{feedback.comment}</article>}
                </div>
            )
        })

        return (
            <div className='feedback'>
                <h1 className='feedbackTitle'>Submit your feedback</h1>
                <div className='feedbackName'>
                    <label htmlFor="name">YOUR NAME:</label>
                    <input id='name' name='name' type="text" onChange={this.handleInputChange} value={this.state.name} />
                    {this.state.errors.name && <div data-test='nameError' className="error">{this.messages.name}</div>}
                </div>
                <div className='feedbackText'>
                    <label htmlFor="text">FEEDBACK:</label>
                    <textarea name="text" id="text" cols="30" rows="10" onChange={this.handleInputChange} value={this.state.feedback} ></textarea>
                    {this.state.errors.feedback && <div data-test='feedbackError' className="error">{this.messages.feedback}</div>}
                </div>
                {this.state.feedbackSent && <div className="error">Your feedback has been submitted!</div>}
                <button onClick={this.handleFeedbackSubmit} className="feedbackSubmit">Submit</button>
                <div className="otherFeedbacks">
                    <h1 className='buyersFeedback'>Buyers feedback</h1>
                    {feedbacks}
                </div>
            </div>
        );
    }
}

export default Feedback;