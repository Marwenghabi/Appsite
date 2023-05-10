import React from "react";
import './StyleAbout.css';
import AboutPart1 from "./AboutPart1";
import AboutPart2 from "./AboutPart2";
import Nabar from '../navbar/Navbar';
import Footer from '../footer/Footer';




class Index extends React.Component {


    render() {

        return (

            <div>
                <Nabar/>
                
                <AboutPart1/>
                <AboutPart2/>
                <Footer/>
               

            </div>
















        );
    }
}

export default Index;