import React from "react";
import './stylePartners.css';
import logoPodyam from '../../assets/PODYAM-logo.png';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
class Podyam extends React.Component {

  render() {
    return (
      <div>
         <Navbar />
        <div className="container">

          <div class="row content" data-aos="fade-up">
            <div className="col-lg-4">
              <div style={{ paddingTop: "100px" }}></div>
              <h1 className="titlePartners"> PODYAM</h1>
              <div className="separtionPartners"></div>
            </div>
          </div>
          <div class="row content" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="TextPartners">

                <p data-i18n-key="partners-con">Intiqaal Information Technology is the official Podyam Business Partner and Reseller in Saudi Arabia. Intiqaal offers the full range of Podyam Products and consulting services</p>
              </div></div></div>
          <div class="row content" data-aos="fade-up">

            <div className="col-lg-3">
              <a href="#">
                <img src={logoPodyam}
                  className="testimonial-img"
                  onClick={() => { window.open('https://podyam.com/', '_blank'); }
                }

                /></a>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <a href="#"  onClick={() => { window.open('https://podyam.com/', '_blank'); }
                  } className="btn-learn-more" data-i18n-key="cta-btn">RedHat Business Partner</a>
            </div>
          </div>
          <div style={{ paddingTop: "15px" }}></div>
        </div>  
        <Footer />    
      </div>
    );
  }
}
export default Podyam; 