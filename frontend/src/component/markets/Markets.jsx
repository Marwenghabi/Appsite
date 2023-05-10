import React from "react";
import governmentimg from '../../assets/goverment.png';
import barrelimg from '../../assets/Oil&gassector (1).png';
import budgetimg from '../../assets/financial (1).png';
import serviceimg from '../../assets/smb (1).png';
import './styleMarkets.css';

class Markets extends React.Component {


    render() {

        return (

            <div>
                
                <div className="container">

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
                                    <h6 data-i18n-key="market-item1" style={{color :"#28367f"}} className="marginClass">Government</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                           
                            <div class="card" >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={barrelimg} className="img-fluid" alt="" style={{ width: "auto"}}/>
                                    <div class="member-info">
                                    <h6 data-i18n-key="market-item2"  style={{color :"#28367f"}} className="marginClass">Oil & Gas sector</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                           
                             <div class="card" >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={budgetimg} class="img-fluid" alt=""  style={{ width: "auto"}}/>
                                    <div class="member-info">
                                    <h6 data-i18n-key="market-item3"  style={{color :"#28367f"}} className="marginClass">Financial Institutions</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                            
                              <div class="card" >                           
                                <div class="card-body">
                                    <img src={serviceimg}  className="imgMarkets" />
                                    <h6 data-i18n-key="market-item4"  style={{color :"#28367f"}} className="marginClass"> SMB and Software companies</h6> 
                                </div>
                            </div>
                        </div>

                    </div></div>
                    
                  
                </div>
             

            </div>);
    }
}
export default Markets;