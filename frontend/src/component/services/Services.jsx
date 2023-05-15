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
            isHovered2: false,
            isHovered3: false,

            heightcard: "250px",
            heightcard1: "250px",
            heightcard2: "260px",
            heightcard3: "260px",


            marginLeft: "11px",
            marginTop: "195px",

            marginLeft1: "11px",
            marginTop1: "195px",

            marginLeft2: "11px",
            marginTop2: "210px",

            marginLeft3: "11px",
            marginTop3: "210px"
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.handleMouseEnter1 = this.handleMouseEnter1.bind(this);
        this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);

        this.handleMouseEnter2 = this.handleMouseEnter2.bind(this);
        this.handleMouseLeave2 = this.handleMouseLeave2.bind(this);

        this.handleMouseEnter3 = this.handleMouseEnter3.bind(this);
        this.handleMouseLeave3 = this.handleMouseLeave3.bind(this);
    }



    handleMouseEnter() {
        this.setState({
            isHovered: true,
            heightcard: "520px",
            marginLeft: "11px",
            marginTop: "470px"
        });
    }
    handleMouseLeave() {
        this.setState({
            isHovered: false,
            heightcard: "250px",
            marginLeft: "11px",
            marginTop: "195px"
        });
    }

    handleMouseEnter1() {
        this.setState({
            isHovered1: true,
            heightcard1: "390px",
            marginLeft1: "11px",
            marginTop1: "330px"
        });
    }


    handleMouseLeave1() {
        this.setState({
            isHovered1: false,
            heightcard1: "250px",
            marginLeft1: "11px",
            marginTop1: "195px"
        });
    }

    handleMouseEnter2() {
        this.setState({
            isHovered2: true,
            heightcard2: "550px",
            marginLeft2: "11px",
            marginTop2: "500px"

        });
    }


    handleMouseLeave2() {
        this.setState({
            isHovered2: false,
            heightcard2: "260px",
            marginLeft2: "11px",
            marginTop2: "210px"
        });
    }



    handleMouseEnter3() {
        this.setState({
            isHovered3: true,
            heightcard3: "450px",
            marginLeft3: "11px",
            marginTop3: "400px"
        });
    }
    handleMouseLeave3() {
        this.setState({
            isHovered3: false,
            heightcard3: "260px",
            marginLeft3: "11px",
            marginTop3: "210px"
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
                        <div class="col-md-6 col-lg-6"  >

                            <div class="card styleCard" style={{ height: this.state.heightcard, zIndex: "2" , borderRadius:"36px" }}>
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
                                            {this.state.isHovered ? (
                                                <div className="circle">
                                                    <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft, marginTop: this.state.marginTop }}>X</div>
                                                </div>
                                            ) : (
                                                <div className="circle">
                                                    <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft, marginTop: this.state.marginTop }}>+</div>
                                                </div>)}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6 col-lg-6"   >
                            <div class="card styleCard" style={{ height: this.state.heightcard1, zIndex: "2", borderRadius:"36px" }}>
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

                                            </div>

                                            <div className='col-lg-1  positioncircle'>
                                                {this.state.isHovered1 ? (
                                                    <div className="circle">
                                                        <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft1, marginTop: this.state.marginTop1 }}>X</div>
                                                    </div>
                                                ) : (
                                                    <div className="circle">
                                                        <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft1, marginTop: this.state.marginTop1 }}>+</div>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>





</div>







<div className="row">

                        <div class="col-md-6 col-lg-6" style={{ marginTop: "20px" }}>
                            <div class="card styleCard" style={{ height: this.state.heightcard2, zIndex: "4" , borderRadius:"36px"}}>
                                <div onMouseEnter={this.handleMouseEnter2} onMouseLeave={this.handleMouseLeave2}>

                                    <div>
                                        <div class="row" >
                                            <div className="col-lg-3">
                                                <img src={managedimag} className='imagmanagend' />
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className='titleSev'>  Managed DevOps Service </h3>
                                                <div class="card-body p">
                                                    {this.state.isHovered2 ? (
                                                        <div>
                                                            <p>Providing world-class certified DevOps engineers to improve operations and take care of cloud infrastructure from A to Z. </p>
                                                            <p>CI / CD / Continuous Integration and Continuous Delivery Care, installation of systems and management of various ports and paths. </p>
                                                            <p>CI / CD / Continuous Integration and Continuous</p>
                                                            <p>Providing world-class certified DevOps engineers to improve operations and take care of cloud infrastructure from A to Z.</p>
                                                            <p>CI / CD / Continuous Integration and Continuous Delivery Care, installation of systems and management of various ports and paths.</p>
                                                        </div>
                                                        ) : (
                                                        <div>
                                                            <p>Providing world-class certified DevOps engineers to improve operations and take care of cloud infrastructure from A to Z. </p>
                                                            <p>CI / CD / Continuous Integration and Continuous Delivery Care, installation of systems and management of various ports and paths. </p>
                                                           
                                                        </div>
                                                    )}


                                                </div>
                                            </div>
                                            <div className='col-lg-1  positioncircle'>
                                                {this.state.isHovered2 ? (
                                                    <div className="circle">
                                                        <div style={{
                                                            color: "white", fontSize: "2rem",
                                                            marginLeft: this.state.marginLeft2,
                                                            marginTop: this.state.marginTop2
                                                        }}>X</div>
                                                    </div>
                                                ) : (
                                                    <div className="circle">
                                                        <div style={{
                                                            color: "white", fontSize: "2rem",
                                                            marginLeft: this.state.marginLeft2,
                                                            marginTop: this.state.marginTop2
                                                        }}>+</div>
                                                    </div>)}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div class="col-md-6 col-lg-6" style={{ marginTop: "20px" }}>
                            <div class="card styleCard " style={{ height: this.state.heightcard3, zIndex: "4" , borderRadius:"36px"}}>
                                <div onMouseEnter={this.handleMouseEnter3} onMouseLeave={this.handleMouseLeave3}>

                                    <div>
                                        <div class="row" >
                                            <div className="col-lg-3">
                                                <img src={trainingimag} className='imagtraining' />
                                            </div>
                                            <div className="col-lg-8">
                                                <h3 className='titleSev'> Training and Certification</h3>
                                                <div class="card-body p ">
                                                    {this.state.isHovered3 ? (
                                                        <div>
                                                            <p>Provide training on the cloud and DevOps </p>
                                                            <p>Partnering with Cloud Leaders, DevOps Google, Red Hat, Azure Github…)</p>
                                                            <p>Providing customized Cloud and DevOps courses for users and facilities.</p>
                                                            <p>Providing customized Cloud and DevOps courses</p>
                                                            <p>Partnering with Cloud Leaders, DevOps Google,</p>
                                                            <p>Provide training on the cloud and DevOps</p>
                                                        </div>) : (
                                                        <div>
                                                            <p>Provide training on the cloud and DevOps </p>
                                                            <p>Partnering with Cloud Leaders, DevOps Google, Red Hat, Azure Github…)</p>
                                                            <p>Providing customized Cloud and DevOps courses for users and facilities.</p>

                                                        </div>
                                                    )}


                                                </div>
                                            </div>
                                            <div className='col-lg-1  positioncircle'>
                                                {this.state.isHovered3 ? (
                                                    <div className="circle">
                                                        <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft3, marginTop: this.state.marginTop3 }}>X</div>
                                                    </div>
                                                ) : (
                                                    <div className="circle">
                                                        <div style={{ color: "white", fontSize: "2rem", marginLeft: this.state.marginLeft3, marginTop: this.state.marginTop3 }}>+</div>
                                                    </div>)}
                                            </div>

                                        </div></div>
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





