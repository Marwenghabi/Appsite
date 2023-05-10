import React from "react";
import './StyleAbout.css';
import googleimg from '../../assets/img/experts/google.png';
import dockerimg from '../../assets/img/experts/docker.png';
import githubimg from '../../assets/img/experts/github.png';
import gitlabimg from '../../assets/img/experts/gitlab.png';
import ckaimg from '../../assets/img/experts/k8s.png';
import orcaleimg from '../../assets/img/experts/oracle.png';
import redhatimg from '../../assets/img/experts/redhat.png';

import { withTranslation } from 'react-i18next';



class AboutPart1 extends React.Component {
    constructor(props) {
        super(props);
        
      }
    
    
    render() {
        const { t } = this.props;
        return (

            <div>
                <div className="container" >

                    <div class="row content" data-aos="fade-up">
                        <div className="col-lg-4">

                            <div className="espaceAbout"></div>
                            <h1 className="titleAbout"> {t('about')}</h1>
                            <div className="separtionAbout1"></div>
                            <div className="TextAbout">
                                <p data-i18n-key="about-content" >
                                {t('about-content')}
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" ></i><span data-i18n-key="ab-content1">{t('ab-content1')}</span></li>
                                    <li><i className="ri-check-double-line"></i><span data-i18n-key="ab-content2"> {t('ab-content2')} </span></li>
                                    <li><i className="ri-check-double-line"></i><span data-i18n-key="ab-content3">{t('ab-content3')}</span></li>

                                    <li><i className="ri-check-double-line"></i><span data-i18n-key="ab-content4">{t('ab-content4')}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0">
                            <div className="TextAbout">
                                <p data-i18n-key="mission-content" className="espacetop">
                                   {t("mission-content")}
                                </p></div>
                            <a href="Contact" className="btn-learn-more" data-i18n-key="cta-btn">{t("cta-btn")}</a>
                        </div>
                    </div>


                </div>
                <div className="container" style={{ paddingTop: "30px" }}>
                    <div class="row content" data-aos="fade-up">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-6">
                            <swiper-container slides-per-view="5">
                                <swiper-slide><img src={dockerimg} class="img-fluid" alt="" />
                                </swiper-slide>
                                <swiper-slide><img src={gitlabimg} class="img-fluid" alt="" /></swiper-slide>
                                <swiper-slide><img src={githubimg} class="img-fluid" alt="" /></swiper-slide>
                                <swiper-slide><img src={ckaimg} class="img-fluid" alt="" /></swiper-slide>
                                <swiper-slide><img src={googleimg} class="img-fluid" alt="" /></swiper-slide>
                                <swiper-slide><img src={orcaleimg} class="img-fluid" alt="" /></swiper-slide>
                                <swiper-slide><img src={redhatimg} class="img-fluid" alt="" /></swiper-slide>
                            </swiper-container></div></div>
                </div>

              

                <div style={{ marginTop: "50px" }}></div>

            </div>
















        );
    }
}

export default withTranslation()(AboutPart1);