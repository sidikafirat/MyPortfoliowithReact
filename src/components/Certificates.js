import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import foto from '../assets/img/otomotivyazkampi.jpeg';
import gaming from '../assets/img/microfonSertifika.png';

// Sertifika verilerini bir array icinde tutuyorum
const certificateData = [
  {
    title: 'React 301',
    institution: 'Turkcell Geleceği Yazanlar',
    date: 'August 2024',
    link: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzMyMDQ4Y2lkNDcxOTVxaWQxNTNlbmQ=' ,
  },
  {
    title: 'React 201',
    institution: 'Turkcell Geleceği Yazanlar',
    date: 'August 2024',
    link: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzMyMDQ4Y2lkNDcxOTRxaWQxNTJlbmQ='
  },
  {
    title: 'React 101',
    institution: 'Turkcell Geleceği Yazanlar',
    date: 'July 2024',
    link: 'https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMzMyMDQ4Y2lkNDcxOTNxaWQxNTFlbmQ='
  },
  {
    title: 'Automotive Summer Camp',
    institution: 'Öğrenci Kariyeri',
    date: 'July 2024',
    image: foto // Bu sertifikanin sadece resmi var.
  },
  {
    title: 'Gaming',
    institution: 'Microfon',
    date: 'June 2024',
    image: gaming
  }
];

export default function Certificates() {
  return (
    <section className='certificate' id='certificate'>
    <div className="certificates-container">
      <h2>Certificates</h2>
      <p className='intro-text'>
        Explore the certifications I've earned throughout my professional journey. These certifications represent my commitment to continuous learning and my expertise in various fields. Each certificate highlights my achievements and my dedication to staying updated with industry standards and practices. Feel free to review them and see the milestones I've reached in my career.
      </p>
      <Container>
        <Row className='row'> 
          {certificateData.map((certificate, index) => (/*sertifika kartlarini map metotu ile donguye alip gosteriyoruz */
            <Col key={index} md={4} className="mb-4">
              <div className="certificate-card">
                <h3>{certificate.title}</h3>
                <p><strong>Institution:</strong> {certificate.institution}</p>
                <p><strong>Date:</strong> {certificate.date}</p>
                {certificate.link ? (
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                ) : (
                  <a href={certificate.image} target="_blank" rel="noopener noreferrer">View Certificate</a>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </section>
  );
}
