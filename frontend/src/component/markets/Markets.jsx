import React from "react";
import governmentimg from '../../assets/goverment.png';
import barrelimg from '../../assets/Oil&gassector (1).png';
import budgetimg from '../../assets/financial (1).png';
import serviceimg from '../../assets/smb (1).png';
import Govimag from '../../assets/img/1.png';
import Barimag from '../../assets/img/2.png';
import Bimag from '../../assets/img/3.png';
import Sevimag from '../../assets/img/4.png';
import './styleMarkets.css';

class Markets extends React.Component {


    render() {

        return (

            <div>
                
                <div className="container">

                   
                        <div className="espaceMarkets"></div>
                        <h1 className="titleMarkets">TARGET MARKETS </h1>
                        <div className="separtionMarkets"></div>

               
                   <div style={{color :"#28367f"}}> Top potential markets for which our services are oriented
                    </div><div className="container" style={{ backgroundColor: '#009640' ,borderRadius:"30px", marginTop:"15px" ,padding:"20px" }}>
                    <div className="row"  >

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                           
                            <div class="card stylecardMarkets"  style={{borderRadius:"30px"}} >                            
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={Govimag} className="img-target" alt="" />
                                    <div className="member-info" style={{textAlign: "center"}}>
                                    <h6 className="market-item1" style={{color :"#28367f"}} >Government</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                           
                            <div class="card stylecardMarkets" style={{borderRadius:"30px"}} >                           
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={Barimag} className="img-target"/>
                                    <div class="member-info" style={{textAlign: "center"}}>
                                    <h6 className="market-item1"  style={{color :"#28367f"}} >Oil & Gas sector</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                           
                             <div class="card stylecardMarkets"  style={{borderRadius:"30px"}} >                        
                                <div class="card-body">
                                    <div className="member-img">
                                    <img src={Bimag} className="img-target"/>
                                    <div class="member-info" style={{textAlign: "center"}}>
                                    <h6 className="market-item1"  style={{color :"#28367f"}}>Financial Institutions</h6>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style={{marginTop: "5px"}}>
                            
                              <div class="card stylecardMarkets" style={{borderRadius:"30px"}} >                      
                                <div class="card-body">
                                    <img src={Sevimag}  className="imgMarkets" />
                                    <div class="member-info" style={{textAlign: "center"}}>
                                    <h6 className="market-item1" style={{color :"#28367f"}} > SMB and Software companies</h6> </div>
                                </div>
                            </div>
                        </div>

                    </div></div>
                    
                  
                </div>
             

            </div>);
    }
}
export default Markets;