import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
    <Row className="align-items-center">
        <Col className="text-center">
        <div className="social-icon">
                <a href="https://www.linkedin.com/in/s%C4%B1d%C4%B1ka-firat-05ba42254/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                </a>
                <a href="https://github.com/sidikafirat" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </a>
                <a href="https://www.instagram.com/sidikaafirat/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} color="white" /></a>
            </div>
            <p>© 2024 by Sıdıka Firat. All Rights Reserved.</p>
            
        </Col>
    </Row>
</Container>

        </footer>
    );
}
