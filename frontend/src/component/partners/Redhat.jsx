import React from "react";
import './stylePartners.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useTranslation, withTranslation } from 'react-i18next';
class Redhat extends React.Component {
  constructor(props) {
    super(props);}
  render() {
    const { t } = this.props;
    return (
      <div >
        <Navbar/>
        <div className="container">

          <div class="row content" data-aos="fade-up">
            <div className="col-lg-4">
              <div style={{ paddingTop: "100px" }}></div>
              <h1 className="titlePartners"> RED HAT</h1>
              <div className="separtionPartners"></div>
            </div>
          </div>
          <div class="row content" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="TextPartners">

                <p data-i18n-key="partners-con">{t("redhat-description")}</p>
              </div></div></div>
          <div class="row content" data-aos="fade-up">

            <div className="col-lg-3">
              <a href="#">
                <img src="https://www.redhat.com/cms/managed-files/Asset-Red_Hat-Logo_page-Logo-RGB.svg" alt="The Red Hat logo" loading="lazy"
                  class="testimonial-img"
                  onClick={() => { window.open('https:\/\/catalog.redhat.com/', '_blank'); }
                  }

                /></a>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <a href="#" className="btn-learn-more" data-i18n-key="cta-btn"  onClick={() => { window.open('https:\/\/catalog.redhat.com/', '_blank'); }
                  }>RedHat Business Partner</a>
            </div>
          </div>
          <div style={{ paddingTop: "15px" }}></div>
        </div>
        <div style={{marginTop:"50px"}}></div>
        <Footer/>
      </div>
    );
  }
}
export default withTranslation()(Redhat); 