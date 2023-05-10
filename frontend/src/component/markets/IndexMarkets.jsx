import React from "react";
import governmentimg from '../../assets/img/government.png';
import barrelimg from '../../assets/img/barrel.png';
import budgetimg from '../../assets/img/budget.png';
import serviceimg from '../../assets/img/software-as-service.png';
import './styleMarkets.css';
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
import Markets from "./Markets";
class IndexMarkets extends React.Component {


    render() {

        return (

            <div>
                <Navbar/>
                {/* <div className="container">

                    <div className="row content" data-aos="fade-up">
                        <div className="col-lg-4"></div>
                        <div className="espaceMarkets"></div>
                        <h1 className="titleMarkets">TARGET MARKETS </h1>
                        <div className="separtionMarkets"></div>

                    </div>
                   <div style={{color :"#28367f"}}> Top potential markets for which our services are oriented
                    </div><div className="container" style={{ backgroundColor: '#009640' , marginTop:"10px" ,padding:"40px" }}>
                    <div className="row"  >

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                           
                            <div class="card" >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={governmentimg} className="img-fluid" alt="" style={{    width: "auto"}}/>
                                    <div className="member-info">
                                    <h4 data-i18n-key="market-item1" style={{color :"#28367f"}}>Government</h4>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                           
                            <div class="card" >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={barrelimg} className="img-fluid" alt="" style={{ width: "auto"}}/>
                                    <div class="member-info">
                                    <h4 data-i18n-key="market-item2"  style={{color :"#28367f"}}>Oil & Gas sector</h4>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                           
                             <div class="card" >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={budgetimg} class="img-fluid" alt=""  style={{ width: "auto"}}/>
                                    <div class="member-info">
                                    <h4 data-i18n-key="market-item3"  style={{color :"#28367f"}}>Financial Institutions</h4>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                            
                              <div class="card" >                           
                                <div class="card-body">
                                    <img src={serviceimg} style={{ width: "auto"}} />
                                    <p data-i18n-key="market-item4"  style={{color :"#28367f"}}>SMB and Software companies</p> 
                                </div>
                            </div>
                        </div>

                    </div></div>
                </div> */}
                <Markets/>
                <div style={{marginTop:"50px"}}></div>
                <Footer/>
            </div>);
    }
}
export default IndexMarkets;