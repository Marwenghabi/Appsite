import React, { isValidElement } from "react";
import './styleServices.css';
import teamimag from '../../assets/teamservice.png';
import trainingimag from '../../assets/trainingservice.png';
import managedimag from '../../assets/managedDevops.png';
import cloudimag from '../../assets/cloudprofessional.png';
import imgarrow from "../../assets/arrow-down-left.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            isHovered1: false,
            heightcard: "57%",
            heightcard1: "57%"
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter1 = this.handleMouseEnter1.bind(this);
        this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);
    }



    handleMouseEnter() {
        this.setState({
            isHovered: true,
            heightcard: "100%"
        });
    }

    handleMouseLeave() {
        this.setState({
            isHovered: false,
            heightcard: "60%"

        });
    }



    handleMouseEnter1() {
        this.setState({
            isHovered1: true,
            heightcard: "80%"
        });
    }


    handleMouseLeave1() {
        this.setState({
            isHovered1: false,
            heightcard1: "50%"
        });
    }



    render() {

        return (
            <div style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row" >
                        <div class="col-lg-3 ">
                            <div class="section-title" data-aos="zoom-out">
                                <h1 className="titleDevops" >Services</h1>
                            </div>
                            <div className="separtionService"></div>
                        </div>
                    </div>
                </div>

                







                <div class="container" style={{ backgroundColor: "#084298" }}>
                    <div style={{ marginTop: "30px", padding: "15px" }}></div>
                    <div class="row" >
                        <div class="col-md-6 col-lg-6" >

                            <div class="card styleCard" style={{ height: this.state.heightcard, zIndex: "2" }}>
                                <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>

                                    <div class="row" >
                                        <div className="col-lg-3">
                                            <img src={teamimag} className='imagteam'></img>

                                        </div>
                                        <div className="col-lg-8">
                                            <h3 className='titleSev'> Team as a Service</h3>
                                            <div class="card-body p">

                                                {this.state.isHovered ? (
                                                    <div>
                                                        <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>
                                                        <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>
                                                        <p>Providing various reports, support files, and definitions</p>
                                                        <p>operational directors</p>
                                                        <p>directeurs opérationnels</p>
                                                        <p>IT Engineer</p>
                                                        <p>DevOps Engineers</p>
                                                        <p>Programming Engineers</p>
                                                        <p>Infrastructure Engineers</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>

                                                        <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>

                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className='col-lg-1  positioncircle'>
                                            <div className="circle">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-6"  >
                            <div class="card styleCard" style={{ height: this.state.heightcard1, zIndex: "2" }}>
                                <div onMouseEnter={this.handleMouseEnter1} onMouseLeave={this.handleMouseLeave1}>

                                    <div>
                                        <div class="row" >
                                            <div className="col-lg-3">
                                                <img src={cloudimag} className='imagcloud' />
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className='titleSev'> Cloud professional service</h3>
                                                <div class="card-body p">
                                                    {this.state.isHovered1 ? (
                                                        <div>
                                                            <p>Google Cloud Professional Services</p>
                                                            <p> Hybrid and multicloud.</p>
                                                            <p>Application transfer and data migration.</p>
                                                            <p>SAP system migration</p>
                                                            <p>Hybrid and multicloud.</p>
                                                            <p>Application transfer and data migration.</p>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <p>Google Cloud Professional Services </p>
                                                            <p> Hybrid and multicloud.</p>
                                                            <p>Application transfer and data migration.</p>
                                                        </div>

                                                    )}
                                                </div>
                                                <div className='col-lg-1  positioncircle'>
                                                    <div className="circle">+</div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>








                    






                        <div class="col-md-6 col-lg-6" >
                            <div class="card styleCard" style={{ zIndex: "1", marginTop: "-100px" }}>
                                <div class="row" >
                                    <div className="col-lg-3">
                                        <img src={managedimag} className='imagmanagend' />
                                    </div>
                                    <div className="col-lg-8">
                                        <h3 className='titleSev'>  Managed DevOps Service </h3>
                                        <div class="card-body p">
                                            <p>

                                                Providing world-class certified DevOps engineers to improve operations and take care of cloud infrastructure from A to Z. </p>
                                            <p>
                                                CI / CD / Continuous Integration and Continuous Delivery Care, installation of systems and management of various ports and paths. </p>
                                            <p>CI / CD / Continuous Integration and Continuous</p>
                                            <p>Providing world-class certified DevOps engineers to improve operations and take care of cloud infrastructure from A to Z.</p>
                                            <p>CI / CD / Continuous Integration and Continuous Delivery Care, installation of systems and management of various ports and paths.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-1  positioncircle'>
                                        <div className="circle">
                                            <div style={{ color: "white", fontSize: "2rem", marginLeft: "11px" }}>+</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>





                        <div class="col-md-6 col-lg-6" >
                            <div class="card styleCard " style={{ zIndex: "1", marginTop: "-150px" }}>
                                <div class="row" >
                                    <div className="col-lg-3">
                                        <img src={trainingimag} className='imagtraining' />
                                    </div>
                                    <div className="col-lg-8">
                                        <h3 className='titleSev'> Training and Certification</h3>
                                        <div class="card-body p ">
                                            <p>Provide training on the cloud and DevOps </p>
                                            <p>Partnering with Cloud Leaders, DevOps Google, Red Hat, Azure Github…)</p>
                                            <p>Providing customized Cloud and DevOps courses for users and facilities.</p>
                                            <p>Providing customized Cloud and DevOps courses</p>
                                            <p>Partnering with Cloud Leaders, DevOps Google,</p>
                                            <p>Provide training on the cloud and DevOps</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-1  positioncircle'>
                                        <div className="circle">
                                            <div style={{ color: "white", fontSize: "2rem", marginLeft: "11px" }}>+</div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>


                    </div>
                    <div style={{ padding: "30px" }}></div>
                </div>
            </div>
        );
    }
}

export default Services;




{/* <div className="container">
                <div className="row" style={{ backgroundColor: "#084298" }}>
                    <div style={{ marginTop: "30px", padding: "15px" }}></div>


                    <div className="row">

                        <div className="col-lg-6" >

                            <div class="card" style={{ zIndex: "2" }} >
                                <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                    <div className="row">
                                        
                                        <div className="col-lg-3">
                                            <img src={teamimag} className='imagteam'></img>

                                        </div>
                                        
                                        <div className="col-lg-8">
                                            <div class="card-body">

                                                {/* <h5 class="card-title" style={{color:"green"}}>Titre de la carte 1</h5> */}
                //                                 <h4 className='titleSev'> Team as a Service</h4>
                //                                 {this.state.isHovered ? (
                //                                     <div>
                //                                         <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>
                //                                         <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>
                //                                         <p>Providing various reports, support files, and definitions</p>
                //                                         <p>operational directors</p>
                //                                         <p>directeurs opérationnels</p>
                //                                         <p>IT Engineer</p>
                //                                         <p>DevOps Engineers</p>
                //                                         <p>Programming Engineers</p>
                //                                         <p>Infrastructure Engineers</p>
                //                                     </div>
                //                                 ) : (
                //                                     <div>
                //                                         <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>

                //                                         <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>

                //                                     </div>
                //                                 )}
                //                             </div>
                //                             <div className="col-lg-1"></div>
                //                         </div>
                //                     </div>
                //                 </div>


                //             </div>





                //         </div>
                //         <div className="col-lg-6">

                //         <div class="card styleCard" style={{ height: this.state.heightcard1, zIndex: "2" }}>
                //                 <div onMouseEnter1={this.handleMouseEnter1} onMouseLeave1={this.handleMouseLeave1}>

                //                     <div>
                //                         <div class="row" >
                //                             <div className="col-lg-3">
                //                                 <img src={cloudimag} className='imagcloud' />
                //                             </div>
                //                             <div className="col-lg-8">
                //                                 <h3 className='titleSev'> Cloud professional service</h3>
                //                                 <div class="card-body p">
                //                                     {this.state.isHovered1 ? (
                //                                         <div>
                //                                             <p>Google Cloud Professional Services</p>
                //                                             <p> Hybrid and multicloud.</p>
                //                                             <p>Application transfer and data migration.</p>
                //                                             <p>SAP system migration</p>
                //                                             <p>Hybrid and multicloud.</p>
                //                                             <p>Application transfer and data migration.</p>
                //                                         </div>
                //                                     ) : (
                //                                         <div>
                //                                             <p>Google Cloud Professional Services </p>
                //                                             <p> Hybrid and multicloud.</p>
                //                                             <p>Application transfer and data migration.</p>
                //                                         </div>

                //                                     )}
                //                                 </div>
                //                                 <div className='col-lg-1 '>
                //                                     {/* <div className="circle">+</div> */}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                     </div>

                //                 </div>
                //             </div>





                //         </div>
                //         <div style={{ marginTop: "20px" }}></div>
                //         <div className="col-lg-6"  >

                //             <div class="card" style={{ zIndex: "1" }} >
                //                 {/* <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}> */}
                //                 <div className="row">
                //                     <div className="col-lg-2">
                //                         <FontAwesomeIcon icon={faCoffee} />
                //                     </div>
                //                     <div className="col-lg-8">
                //                         <div class="card-body">

                //                             {/* <h5 class="card-title" style={{color:"green"}}>Titre de la carte 1</h5> */}
                //                             <h4 className='titleSev'> Team as a Service</h4>
                //                             {/* {this.state.isHovered ? (
                //                                 <div> */}
                //                             <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>
                //                             <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>
                //                             <p>Providing various reports, support files, and definitions</p>
                //                             <p>operational directors</p>
                //                             <p>directeurs opérationnels</p>
                //                             <p>IT Engineer</p>
                //                             <p>DevOps Engineers</p>
                //                             <p>Programming Engineers</p>
                //                             <p>Infrastructure Engineers</p>
                //                             {/* //  </div> */}
                //                             {/* // ) : (
                //                             //     <div>
                //                             //         <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>

                //                             //         <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>

                //                             //     </div>
                //                             // )} */}
                //                         </div>
                //                         <div className="col-lg-2"></div>
                //                     </div>
                //                     {/* </div> */}
                //                 </div>


                //             </div>





                //         </div>

                //         <div className="col-lg-6"  >

                //             <div class="card" style={{ zIndex: "1" }} >
                //                 {/* <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}> */}
                //                 <div className="row">
                //                     <div className="col-lg-2">
                //                         <FontAwesomeIcon icon={faCoffee} />
                //                     </div>
                //                     <div className="col-lg-8">
                //                         <div class="card-body">

                //                             {/* <h5 class="card-title" style={{color:"green"}}>Titre de la carte 1</h5> */}
                //                             <h4 className='titleSev'> Team as a Service</h4>
                //                             {/* {this.state.isHovered ? (
                //                                 <div> */}
                //                             <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>
                //                             <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>
                //                             <p>Providing various reports, support files, and definitions</p>
                //                             <p>operational directors</p>
                //                             <p>directeurs opérationnels</p>
                //                             <p>IT Engineer</p>
                //                             <p>DevOps Engineers</p>
                //                             <p>Programming Engineers</p>
                //                             <p>Infrastructure Engineers</p>
                //                             {/* //  </div> */}
                //                             {/* // ) : (
                //                             //     <div>
                //                             //         <p>Delivering well-experienced, Continuous Delivery, Continuous Integration/DevOps and DevSecOps engineers in the field and in the cloud.</p>

                //                             //         <p>Take a leadership role to help facilities move forward (site engineers and project management services)</p>

                //                             //     </div>
                //                             // )} */}
                //                         </div>
                //                         <div className="col-lg-2"></div>
                //                     </div>
                //                     {/* </div> */}
                //                 </div>


                //             </div>


                                                


                //         </div>



                //     </div>

                   
                //     <div style={{ marginTop: "30px", padding: "15px" }}></div>
                // </div>
                // </div> */}
