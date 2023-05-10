import React from "react";
import CIImg from '../../assets/CI-CD.svg';
import TopDevopsImg from '../../assets/TopDevops.svg';
import LargeExperienceImg from '../../assets/LargeExperience.svg';
import './styleServices.css';
import { withTranslation } from 'react-i18next';
class DevOps extends React.Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        const { t } = this.props;
        return (
            <div style={{marginTop:"30px"}}>
                <div class="container">




                    <div className="row">
                    <div class="col-lg-7 ">
                    <div class="section-title" data-aos="zoom-out">
                        <p className="titleDevops" > {t("titleDevops")}</p>
                    </div>
                    <div className="separtionDevops"></div>
                    </div></div>
                    <div className="TextAbout">
                        <p data-aos="zoom-out" data-i18n-key="devops-content" style={{color :"#28367f"}}> {t("devops-content")}</p>
                    </div>
                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                         
                                <h3 data-i18n-key="ci-cd" className="CICD" >CI / CD</h3>
                                <div style={{marginTop : "30px"}}><img src={CIImg}  className="imgCICD"/></div>
                                <p data-i18n-key="ci-cd-content"  className="contentrow" >
                                {t("ci-cd-content")}
                                </p>

                           
                        </div>



                        <div class="col-lg-4 col-md-6">
                            <div class="box" data-aos="zoom-in">
                                <h3 data-i18n-key="devops-skills"  className="titleTopDevops" > {t("devops-skills")}</h3>
                                <div  style={{marginTop : "30px"}}><img src={TopDevopsImg} className="imgTopDevOps" /></div>
                                <p data-i18n-key="devops-skills-content"   className="contentrow">
                                   {t("devops-skills-content")}
                                    </p>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="box" data-aos="zoom-in">
                                <h3 data-i18n-key="devops-experience" className="titleExperience" >{t("devops-experience")}</h3>
                                <div  style={{ marginTop: "30px" }}><img src={LargeExperienceImg}  className="imgExp"/></div>
                                <p data-i18n-key="devops-experience-content"  className="contentrow" >
                                {t("devops-experience-content")}
                                </p>

                            </div>
                        </div>

                    </div>



                    <p data-i18n-key="devops-prev-content" style={{marginTop:"10px" ,color :"#28367f"}}>
                    {t("devops-prev-content")}</p>
                    <div className="row">

                        <div className="separtionPoint"></div>
                    </div>
                    <div className="row" style={{ border: " 1px solid #dee2e6", borderRadius: "10px", marginTop: "10px" }}>
                        <h5 style={{ color: "#009640", fontWeight: "500" }}>{t('devops-right1')}</h5>
                        <p data-i18n-key="devops-right1-content" style={{color :"#28367f"}}>
                           {t("devops-right1-content")}
                        </p>
                    </div>

                    <div className="row" style={{ border: " 1px solid #dee2e6", borderRadius: "10px", marginTop: "10px" }}>
                        <h5 className="titleSectionDevops"> {t('devops-right2')}</h5>
                        <p data-i18n-key="devops-right2-content" style={{color :"#28367f"}}>

                            {t('devops-right2-content')} </p>
                    </div>
                    <div className="row" style={{ border: " 1px solid #dee2e6", borderRadius: "10px", marginTop: "10px" }}>
                        <h5 className="titleSectionDevops">  {t('devops-right3')}</h5>
                        <p data-i18n-key="devops-right3-content" style={{color :"#28367f"}}>

                            {t('devops-right3-content')}
                        </p>
                    </div>
                    <div className="row" style={{ border: " 1px solid #dee2e6", borderRadius: "10px", marginTop: "10px" }}>
                        <h5 className="titleSectionDevops">   {t('devops-right4')}</h5>
                        <p data-i18n-key="devops-right4-content" style={{color :"#28367f"}}>
                            {t('devops-right4-content')}
                          </p>
                    </div>
                </div>
                <div style={{marginTop:"30px"}}></div>
            </div>
        );
    }
}

export default withTranslation()(DevOps);