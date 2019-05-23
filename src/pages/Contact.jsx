import React, {
    Component
} from 'react';
import './Contact.css';
class Contact extends Component {
    state = {
        
        feedback: '',
        formSubmitted: false,
        name:'',
        errors:{
          name:false,
          feedback:false
        }
    }
   
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    messages={
      name:'Enter proper email address',
      feedback:'Your message must be at least 12 letters long'
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

  formValidation() {
       
    let name = false;
    let feedback = false;
    let correct = false
    
    if (this.state.name.includes('@')) {
        name = true;
    }
   if(this.state.feedback.length >5){
       feedback = true;
   }
    
    if (feedback && name) {
        correct = true
    }
    return ({ feedback, name, correct })
}

    handleSubmit(event) {
      
      event.preventDefault();
        const validation = this.formValidation()
        if (validation.correct) {
            console.log(this.props)
           
            this.setState({
                errors: {
                    name: false,
                    feedback: false,
                    
                    
                },
                formSubmitted: true

            })
            const receiv = 'donatelek92@gmail.com'
            const temp = 'contact_template'
            this.sendFeedback(
              temp,
              this.sender,
              this.state.name,
              this.state.feedback
            );
           

            
           
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    feedback: !validation.feedback,
                   
                    
                }
            })
        }

    





        
        
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
              formEmailSent: true,
              name:'',
              feedback:''
            })
            setTimeout(()=>{
              this.setState({
                formEmailSent:false
              })
            },4000)
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
            {this.state.errors.name&&<div className="error">{this.messages.name}</div>}
            </div> 
            <div className='contactMessage'>
            <label>Message</label> 
            <textarea  id="feedback-entry"
          name="feedback-entry" onChange={this.handleChange} placeholder="Enter your message here" required value={this.state.feedback}> </textarea> 
          {this.state.errors.feedback&&<div className="error">{this.messages.feedback}</div>}
            </div> 
            {this.state.formEmailSent&&<div className="error">Message has been sent!</div>}
            <input className='contactSubmit' type="submit" value="Send" />
            </form> 
         </div>

            </>
        );
    }
}

export default Contact;