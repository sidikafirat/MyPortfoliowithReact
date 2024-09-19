import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import vesikalik from "../assets/img/vesikalik.jpg"; // Vesikalik fotograf
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');//aktif baglantiyi ve sayfanin kaydirilip kaydirilmayacagini yonetmek icin stateler tanimladim
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {//scroll ile navbarin kaydirildigini kontrol ettim
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }
            else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);//scrollu ekledim

        return () => window.removeEventListener("scroll", onScroll);/*ayni eventi ve fonksiyonu dondur */
    }, [])

    const onUpdateActiveLink = (value) => {//aktif baglantiyi gunceller
        setActiveLink(value);
    }


    return (
        <Router>
            <img src={vesikalik} alt="Profile" className="profile-photo" />
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">{/*mobilde menuyu acip kapama*/}
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">{/*menu baglantilari */}
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#certificate" className={activeLink === 'certificate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificate')}>Certificates</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">{/*sosyal medya iconlari */}
                                <a href="https://www.linkedin.com/in/s%C4%B1d%C4%B1ka-firat-05ba42254/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} color="white" /></a>
                                <a href="https://github.com/sidikafirat" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="white" /></a>
                                <a href="https://www.instagram.com/sidikaafirat/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="white" /></a>
                            </div>
                            <HashLink to='#connect'>{/*mail atmak icin buton */}
                                <button className="vvd" onClick={() => window.location.href = 'mailto:fsidika1@gmail.com'}>
                                    <span>Let’s Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}