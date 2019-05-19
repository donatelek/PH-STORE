import React, { Component } from 'react';
import './Feedback.css'
class Feedback extends Component {
    state = {
        inputName: '',
        inputComment: '',
        feedbacks: []
    }
    UNSAFE_componentWillMount(){
        fetch('http://localhost:3005/feedback', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json()).then(res => {
            this.setState({
                feedbacks:res
            })
        }).catch(err => console.log(err))
    }
    componentDidMount() {
       
        window.scrollTo(0, 0)

    }
    handleInputChange = (e) => {
        let value = e.target.value;
        let name;
        let comment;
        if (e.target.name === 'name') {
            this.setState({
                inputName: value
            })
        }
        if (e.target.name === 'text') {
            this.setState({
                inputComment: value
            })
        }
        // this.setState({
        //     feedbacks: this.state.feedbacks.push({ name, comment })
        // })
    }
    handleFeedbackSubmit = () => {
        console.log(this.state.inputComment)
        console.log(this.state.inputName)
        const feedbacks = this.state.feedbacks
        feedbacks.unshift({ name: this.state.inputName, comment: this.state.inputComment })
        console.log(feedbacks)
        this.setState({
            feedbacks
        })
        fetch('http://localhost:3005/addfeedback', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:this.state.inputName,
          feedback:this.state.inputComment
        })
      }).then(res=>res.json()).then(res=>{
          this.setState({
            feedback:res
          })
      })
    }
    render() {
        const feedbacks = this.state.feedbacks.map(feedback => {
            return (
                <>
                    <h1 className='userFeedbackName'>{feedback.name}</h1>
                    {feedback.feedback&&<article className='userFeedback'>{feedback.feedback}</article>}
                    {feedback.comment&&<article className='userFeedback'>{feedback.comment}</article>}
                    
                </>
            )
        })
        return (
            <div className='feedback'>
                <h1 className='feedbackTitle'>Submit your feedback</h1>
                <div className='feedbackName'>
                    <label htmlFor="name">YOUR NAME:</label>
                    <input id='name' name='name' type="text" onChange={this.handleInputChange} />
                </div>
                <div className='feedbackText'>
                    <label htmlFor="text">FEEDBACK:</label>
                    <textarea name="text" id="text" cols="30" rows="10" onChange={this.handleInputChange}></textarea>
                </div>
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