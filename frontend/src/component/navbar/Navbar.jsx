import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';
import logo from '../../assets/logo2.png';
import logovision from '../../assets/logovision.png';
import { withTranslation } from 'react-i18next';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "AR",
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.isClicked, " state de langue");
    if ((this.state.isClicked)) {     
      this.setState({
        text: 'AR',
        isClicked: false
      });
      this.props.i18n.changeLanguage('en');
      localStorage.setItem("i18nextLng",'en');
    } else {
      this.props.i18n.changeLanguage('ar')
      this.setState({
        text: 'EN',
        isClicked: true
      });
      localStorage.setItem("i18nextLng",'ar');
    }
  }
  render() {
    const { t } = this.props;
    console.log(this.props.i18n.language);
    console.log(this.props.name,"testttt");
    return (
      <Navbar bg="white" expand="lg" fixed="top">
        <Container style={{ backgroundColor: 'white' }}>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100%"
              height="60"
              className="d-inline-block align-top"
            />


          </Navbar.Brand>



          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">




          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-center">
            <Nav className="me-auto " >
              <Nav.Link href="/" className="navstyle" style={{color :"  rgb(40, 54, 127)"}}  >{t('home')}</Nav.Link>
              <Nav.Link href="About" className="navstyle"  style={{color :"   rgb(40, 54, 127)"}}>{t('about')}</Nav.Link>
              <Nav.Link href="Services" className="navstyle" style={{color :"   rgb(40, 54, 127)"}}>{t('services')}</Nav.Link>
              <Nav.Link href="Markets" className="navstyle" style={{color :"  rgb(40, 54, 127)"}}>{t('target-markets')}</Nav.Link>
              <NavDropdown  href="Partners"  title={t("partners")} style={{color :"rgb(40, 54, 127)"}} >
                <NavDropdown.Item href="Redhat" className="navstyle" style={{color :"  rgb(40, 54, 127)"}}>{t('Redhat')}</NavDropdown.Item>
                <NavDropdown.Item href="Podyam" className="navstyle" style={{color :"  rgb(40, 54, 127)"}}>{t('Podyam')}</NavDropdown.Item>       
              </NavDropdown> 
              
              
              <Nav.Link href="Contact" className="navstyle" style={{color :" rgb(40, 54, 127)"}}>{t('contact')}</Nav.Link>
              <Nav.Link href="" className="navstyle" 
                onClick={this.handleClick} style={{color :"  rgb(40, 54, 127)"}} >
                  {this.state.text}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <img
              src={logovision}
              width="90"
              height="60"
              className="d-inline-block align-top"

            />
          </Navbar.Collapse>
        </Container>

      </Navbar>
    );
  }
}

export default withTranslation()(NavBar);