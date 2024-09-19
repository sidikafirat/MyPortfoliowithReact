import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";

export const Contact = () => {
    const fromInitialDetails = {/*formun baslnagic degerlerini tanimladim */
        firstName: '',
        lastName: '',
        email: '',
        typecontact: '',
        message: ''
    };
    /*form detaylari, buton metni ve durum bilgilerini saklamak icin stateler */
    const [formDetails, setFormDetails] = useState(fromInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {//formdaki alanlari gunceller
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {//formu gonderme ıslemini gercekletiren fonksiyon
        e.preventDefault();//formun varsayilan davranisini engeller
        setButtonText('Sending...');
    
        try {
            // Veritabanına veri gönder
            const dbResponse = await fetch('http://localhost:5001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDetails),
            });
            
            if (!dbResponse.ok) {
                throw new Error('Database error');
            }
    
            // E-posta gönder
            const mailResponse = await fetch('http://localhost:5002/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDetails),
            });
    
            const result = await mailResponse.json();
            setStatus({ success: mailResponse.ok, message: result.message });
    
            if (mailResponse.ok) {
                setFormDetails(fromInitialDetails); // Formu temizle
            } else {
                throw new Error('Mail sending failed');
            }
        } catch (error) {
            setStatus({ success: false, message: error.message });
        }
    
        setButtonText('Send');
        
    };
    useEffect(() => {
        // 5 saniye sonra mesaji sifirlamak icin timer ayari
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({});
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">{/*form girisleri */}
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name" 
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name" 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.typecontact} 
                                        placeholder="Type Contact (suggestions, complaints etc.)" 
                                        onChange={(e) => onFormUpdate('typecontact', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea 
                                        rows="6" 
                                        value={formDetails.message} 
                                        placeholder="Message" 
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>/*durum mesajini gosterir */
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
