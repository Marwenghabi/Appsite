import React from "react";
import Devops from "./Devops";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
class IndexDevops extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div style={{ marginTop: "100px" }}></div>
                <Devops/>
                <Footer/>
            </div>
        )
    }
}
export default IndexDevops;