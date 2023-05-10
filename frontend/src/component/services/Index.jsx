import React from "react";
import DevOps from "./Devops";
import Services from "./Services";
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
class IndexService extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="Container">                   
                </div>
                <Services/> 
                <DevOps />
                <Footer/>
            </div>

        );
    }
}

export default IndexService;