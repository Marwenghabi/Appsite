import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './styleFooter.css';
import image from '../../assets/logoblanc.png';
import { withTranslation } from 'react-i18next';
class Footer extends React.Component {
    constructor(props) {
        super(props);}
    render() {
        const { t } = this.props;
        return (
            <div >
                <div className='  contentFooter'>

                    <div className=' container'>
                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-lg-3">
                                <img
                                    src={image}
                                    width="310"
                                    height="220"
                                    className="d-inline-block align-top"
                                    style={{
                                        marginLeft: '-90px',
                                        marginTop: '-60px'
                                    }}
                                />
                            </div>

                            <div className='col-lg-3'>
                                <h6 style={{ marginLeft: "5px" }}> Connect with us</h6>
                                <div style={{ padding: '10px' }} ></div>
                                <p style={{ fontSize: '12px', marginLeft: "5px" }}>3656, Al Imam Saud Ibn Faysal Rd, 6428  Al Malqa Dist.</p>
                                <p style={{ fontSize: '12px', marginLeft: "5px" }}>13521 Riyadh Kingdom of Saudi Arabia</p>
                                <div style={{ padding: '5px' }}></div>
                                <p style={{ fontSize: '12px', marginLeft: "5px" }}>Email:contact@intiqaal.com</p>
                                <p style={{ fontSize: '12px', marginLeft: "5px" }}>Mobile:+966 50 033 6049</p>
                            </div>

                            <div className='col-lg-3'>
                                <h6 style={{ marginLeft: "5px" }}> Follow us  </h6>
                                <div style={{ padding: '20px', marginLeft: '-20px' }}>
                                    <a href="" className="facebook social">
                                        <FontAwesomeIcon icon={faFacebook} size="1x" color='white' style={{ fontSize: '25px', marginLeft: "5px" }} />
                                    </a>
                                    <a></a>
                                    <a href="https://www.linkedin.com/company/intiqaal/" className="linkedin social" style={{ marginLeft: '15px' }}>
                                        <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ fontSize: '25px' }} color='white' />
                                    </a>
                                    <a href=""
                                        className="instagram social" style={{ marginLeft: '15px' }}>
                                        <FontAwesomeIcon icon={faInstagram} size="1x" color='white' style={{ fontSize: '25px' }} />
                                    </a>
                                </div></div>
                            <div className='col-lg-3'>
                                <h6 style={{ marginLeft: "5px" }}>Get to know us</h6>
                                <div style={{ padding: '10px' }} >
                                    <div className='row'>
                                        <div className='col-lg-3' style={{ marginLeft: "5px" }}>
                                        <Link to="/" style={{ fontSize: '13px' , color:"white"  ,textDecoration: 'none'}}>Home </Link>
                                            <Link to="/Contact" style={{ fontSize: '13px' , color:"white"  ,textDecoration: 'none'}}>Contact</Link>
                                        </div>
                                        <div className='col' style={{ marginLeft: "5px" }}>
                                        <Link  to="/About" style={{ fontSize: '13px' , color:"white"  ,textDecoration: 'none'}}>About </Link >
                                           <br></br> <Link  to="/Devops" style={{ fontSize: '13px' , color:"white"  ,textDecoration: 'none'}}>Devops </Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='separtionFooter'></div> 
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <a style={{ marginLeft: '5px', fontSize: '12px' }}>All Rights Reserved Intiqaal 2023</a>
                                    </div>
                                    <div className='col'>
                                        <a style={{ marginLeft: '5px', fontSize: '12px' }}>
                                            {/* Designed by Brand Adn */}
                                            COPYRIGHT EXPERT DEV SOLUTIONS 2023
                                            </a>
                                    </div>
                                </div></div>
                            <div style={{ marginTop: '70px' }} />

                        </div></div> </div></div>
        );
    }
}
export default withTranslation()(Footer);
