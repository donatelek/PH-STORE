import React, {
    Component
} from 'react';
import './Contact.css';
class Contact extends Component {
    state = {
        
        feedback: '',
        formSubmitted: false,
        name:'',
    }
   
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';
  handleCancel() {
    this.setState({
      feedback: ''
    });
  }
  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }
  handleNameChange=(e)=>{
  
    this.setState({
      name:e.target.value
    })
  }
    handleSubmit(event) {
        event.preventDefault();
        const receiv = 'donatelek92@gmail.com'
        const temp = 'contact_template'
        this.sendFeedback(
          temp,
          this.sender,
          this.state.name,
          this.state.feedback
        );
        this.setState({
          formSubmitted: true
        });
      }
      sendFeedback(templateId, senderEmail, name, feedback) {
        const receiv = 'donatelek92@gmail.com'
        const temp = 'contact_template'
        console.log(feedback)
        window.emailjs
          .send('mailgun', temp, {
            senderEmail,
            receiv,
            name,
            feedback
          })
          .then(res => {
            this.setState({
              formEmailSent: true
            });
          })
          .catch(err => console.error('Failed to send feedback. Error: ', err));
      }
    render() {
        return ( 
            <> 
            <div className='contactForm'>
            <h1>Contact Us</h1> 
            <form id="contact-form" className="feedback-form" onSubmit={this.handleSubmit}>
            
            <div className='contactEmail'>
            {/* <input type ="text" name ="user_name" /> */}
            <label>Email</label> 
            <input type="email" name ="user_email" onChange={this.handleNameChange} value={this.state.name} />
            </div> 
            <div className='contactMessage'>
            <label>Message</label> 
            <textarea  id="feedback-entry"
          name="feedback-entry" onChange={this.handleChange} placeholder="Enter your message here" required value={this.state.feedback}> </textarea> 
            </div> 
            <input className='contactSubmit' type="submit" value="Send" />
            </form> 
         </div>

            </>
        );
    }
}

export default Contact;