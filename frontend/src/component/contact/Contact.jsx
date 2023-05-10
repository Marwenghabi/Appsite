import React, { useState } from "react";
import axios from "axios";
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
import './StyleContact.css';
import ReCAPTCHA from "react-google-recaptcha";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          recaptchaValue: null,
          errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRecaptchaChange = this.handleRecaptchaChange.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        // Vérification du reCAPTCHA avant l'envoi du formulaire
        if (this.state.recaptchaValue === null) {
          const errors = {recaptcha: 'Veuillez cocher la case reCAPTCHA'};
          this.setState({errors: errors});
          return;
        }
        // Envoi du formulaire ici avec la bibliothèque de votre choix (par ex. Axios)
      }
    
      handleRecaptchaChange(value) {
        this.setState({ recaptchaValue: value, errors: {} });
      }


    // constructor(props) {
    //     super(props)
    
    //     this.handleSubscribe = this.handleSubscribe.bind(this);
    //     this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    //     this.verifyCallback = this.verifyCallback.bind(this);
    
    //     this.state = {
    //       isVerified: false
    //     }
    //   }
    
    //   recaptchaLoaded() {
    //     console.log('capcha successfully loaded');
    //   }
    
    //   handleSubscribe() {
    //     if (this.state.isVerified) {
    //       alert('You have successfully subscribed!');
    //     } else {
    //       alert('Please verify that you are a human!');
    //     }
    //   }
    
    //   verifyCallback(response) {
    //     if (response) {
    //       this.setState({
    //         isVerified: true
    //       })
    //     }
    //   }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: "",
    //         email: "",
    //         message: "",
    //     };
    // }
    // handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value,
    //     });
    // };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { name, email, message } = this.state;

    //     axios
    //         .post("/sendmail.php", { name, email, message })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err));

    //     this.setState({
    //         name: "",
    //         email: "",
    //         message: "",
    //     });
    // };

    render() {
        const errors = this.state.errors;
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div class="row content" data-aos="fade-up">
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
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-3">
                            <div className="espaceContactPart2"></div>


                            <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" name="message" value={this.state.message} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LdoM5cjAAAAACGtXM4dJ8eA3Tqdi6cha9XqjHyE"
            onChange={this.handleRecaptchaChange}
          />
          {errors.recaptcha && <div className="text-danger">{errors.recaptcha}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>




                            {/* <div className="mb-6"  >
                            <div onSubmit={this.handleSubmit}>
                                <input className="form-control"
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleInputChange} placeholder="Your Name" />
                            </div>
                            <div className="mb-6" style={{ paddingTop: '15px' }}>

                                <input class="form-control" name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} placeholder="email" />
                            </div>
                            <div className="mb-6" style={{ paddingTop: '15px' }}>

                                <input name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange} class="form-control" placeholder="Message" />
                            </div>
                            <div className="mb-6" style={{ paddingTop: '30px' }}>
                            
                                <Recaptcha
            sitekey="6LfTolwUAAAAAJ16pnJ1qBgXKlzGeKXRsCMRXllK"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
                               
                               
                                <button type="submit" className="btn-send">Send</button></div>
                            <div style={{ paddingTop: '10px' }}></div>
                            </div> */}
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;


{/* <Row>
                    <Col>
                        <h1 style={{
                            fontSize: " 4.5rem", color: " #0a4172", marginLeft: "154px",
                            paddingTop: "50px"
                        }}> Contact US</h1>
                        <div className="separtionContact"></div>
                        <div className="TextType">
                            <p >Fell free to contact us and
                                we will get back To you as soon as we can </p>
                            <div style={{ padding: '5px' }}></div>
                            <p style={{ fontSize: '12px' }}>3656, Al Imam Saud Ibn Faysal Rd, 6428  Al Malqa Dist.</p>
                            <p style={{ fontSize: '12px' }}>13521 Riyadh Kingdom of Saudi Arabia</p>

                           

                            <br></br>
                            <a style={{ color: 'green' }}>Mobile:</a><a>+966 50 033 6049</a>
                        </div>







                    </Col>
                    <Col>

                       
                        <div class="mb-6" style={{width: '50%',  paddingTop: "180px"}}>
                           
                            <input type="email" class="form-control"  placeholder="Your Name" />
                        </div>
                        <div class="mb-6"  style={{width: '50%' , paddingTop :'15px'}}>
                          
                            <input type="email" class="form-control"  placeholder="Email" />
                        </div>
                        <div class="mb-6" style={{width: '50%' , paddingTop :'15px'}}>
                          
                            <input type="email" class="form-control"  placeholder="Message" />
                        </div>
                        <div class="mb-6" style={{width: '50%' , paddingTop :'30px'}}>
                        <button type="submit" class="btn btn-primary mb-3">Send</button></div>
                    </Col>
                </Row> */}