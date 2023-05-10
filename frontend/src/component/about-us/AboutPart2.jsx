import React from "react";
import './StyleAbout.css';
import aboutimg from '../../assets/Riyadh-Saudi-Arabia.png';
import adobeimag from '../../assets/adobeimage.png';
import adobestockimag from '../../assets/AdobeStock.png';
import visionimag from '../../assets/VISION.png';

import { withTranslation } from 'react-i18next';


class AboutPart2 extends React.Component {
    constructor(props) {
        super(props);
        
      }

    render() {
        const { t } = this.props;
        return (

            <div>




                <div className="container" style={{ marginTop: "30px" }}>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="img-about">
                                {/* <img src={aboutimg} style={{width:"101%"}} alt=""> */}
                                <div className="container">

                                    <div class="row content " data-aos="fade-up" style={{ paddingTop: "150px" }}>
                                        <div className="rectangleAbout ">
                                            <h1 className="styleSection2" >{t("title2sectionAbout")}  </h1>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>

                    </div>


                </div>
                <div className="container" style={{ marginTop: "30px" }}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div lassName="container">
                                <span style={{ color: "#0b1869" }} className="titleSection2"> OUR</span> <span style={{ color: "green" }} className="titleSection2"> VISION</span>
                                <div className="separtionAbout"></div>
                            </div>
                            <div className="TextAbout">
                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }} >
                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom. </p>
                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }}>
                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src={visionimag} style={{ width: "101%" }} className="imageSection2" />
                        </div>
                    </div>







                    <div className="row" style={{ marginTop: "50px" }}>

                        <div className="col-lg-8">
                            <img src={adobestockimag} style={{ width: "101%" }} className="imageSection2" />
                        </div>

                        <div className="col-lg-4">
                            <div lassName="container">
                                <span style={{ color: "#0b1869" }} className="titleSection2"> OUR</span> <span style={{ color: "green" }} className="titleSection2"> MISSION</span>
                                <div className="separtionAbout"></div>
                            </div>
                            <div className="TextAbout">
                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }} >
                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom. </p>

                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }}>

                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom.
                                </p>
                            </div>





                        </div>

                    </div>



                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-lg-4">
                            <div lassName="container">

                                <span className="titleSection2" style={{ color: "#0b1869" }}> OUR</span> <span className="titleSection2" style={{ color: "green" }}> VALUES</span>
                                <div className="separtionAbout"></div></div>
                            <div className="TextAbout">
                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }} >
                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom. </p>

                                <p data-i18n-key="about-content" style={{ fontSize: "17px" }}>

                                    Following the 2030 vision, we aim to accelerate the digital transformation path in Saudi Arabia, by providing smart solutions, offering best practices, employing digital transformation capabilities throughout the kingdom.
                                </p>
                            </div>





                        </div>
                        <div className="col-lg-8">
                            <img src={adobeimag} style={{ width: "101%" }} className="imageSection2" />
                        </div>
                    </div>
                </div>


                <div style={{ marginTop: "50px" }}></div>
            </div>




















        );
    }
}

export default withTranslation()(AboutPart2);