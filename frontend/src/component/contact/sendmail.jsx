import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
import './StyleContact.css';
import ReCAPTCHA from "react-google-recaptcha";
class SendMail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        from: '',
        subject: '',
        message: ''
      },
      errors: {},
      
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/sendmail', this.state.email)
      .then(response => console.log(response)
       
      
      
      )
      .catch(error => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const { email } = this.state;

    this.setState({
      email: {
        ...email,
        [name]: value
      }
    });
  };

  // handleValidation = () => {
  //   const { email } = this.state;
  //   let errors = {};
  //   let formIsValid = true;

  //   // Validate 'from' field
  //   if (!email.from) {
  //     formIsValid = false;
  //     errors['from'] = 'From field is required';
  //   }

  //   // Validate 'to' field
  //   if (!email.to) {
  //     formIsValid = false;
  //     errors['to'] = 'To field is required';
  //   }

  //   // Validate 'subject' field
  //   if (!email.subject) {
  //     formIsValid = false;
  //     errors['subject'] = 'Subject field is required';
  //   }

  //   // Validate 'message' field
  //   if (!email.message) {
  //     formIsValid = false;
  //     errors['message'] = 'Message field is required';
  //   }

  //   this.setState({ errors });
  //   return formIsValid;
  // }

  render() {
    const { email, errors } = this.state;

    return (
      <div>

        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className="col-lg-4">
              <div className="espaceContact"></div>
              <h1 className="titleContact"> Contact US</h1>
              <div className="separtionContact"></div>
              <div className="TextType">
                <p >Fell free to contact us and we will get back To you as soon as we can </p>
                <div style={{ padding: '5px' }}></div>
                <p >3656, Al Imam Saud Ibn Faysal Rd, 6428  Al Malqa Dist.</p>
                <p >13521 Riyadh Kingdom of Saudi Arabia</p>
                <a style={{ color: 'green' }}>Mobile:</a><a>+966 50 033 6049</a>
              </div>
            </div>
            <div className='col-lg-1'>
            </div>

            <div className='col-lg-4'>
              <div className="espaceContactPart2"></div>
              <div>

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">

                    <div className="form-group">

                      <input type="email" placeholder="Email" className="form-control" name="from" value={email.from} onChange={this.handleChange} required />

                    </div>
                    <div className="form-group" style={{ paddingTop: '10px' }}>


                      <input type="text" className="form-control" placeholder="Subject" name="subject" value={email.subject} onChange={this.handleChange} required />

                    </div>

                    <div className="form-group" style={{ paddingTop: '10px' }}>


                      <textarea name="message" placeholder="Message" className="form-control" value={email.message} onChange={this.handleChange} required />
                    </div>

                    <div className="form-group" style={{ paddingTop: '10px' }}>
                      <ReCAPTCHA
                        sitekey="6LdoM5cjAAAAACGtXM4dJ8eA3Tqdi6cha9XqjHyE"
                        // onChange={this.handleRecaptchaChange}
                      />
                      {/* {errors.recaptcha && <div className="text-danger">{errors.recaptcha}</div>} */}
                    </div>
                    <button type="submit" className="btn-send" style={{ paddingTop: '10px' }}>Send</button>
                    <div style={{ paddingTop: '10px' }}></div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '30px' }}></div>
        <Footer />
      </div>
    );
  }
}

export default SendMail;
