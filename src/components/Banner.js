import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import pc2 from "../assets/img/pc2 .png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);/*dongu numarasini ve metnin silinip silinmeyecegini kontrol eden durum degiskenleri */
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Future Computer Engineer"];/*donecek kelimelerin listesi icin bunu tanimladim */

    const [text, setText] = useState('');//metni ve guncellenme hizini takip eden durum degiskenleri
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period = 2000;/*metin dongusu icin sure */

    useEffect(() => {
        let ticker = setInterval(() => {/*metni guncelleyen fonsiyonu belli araliklarla calistirir */
            tick();
        }, delta)
        return () => { clearInterval(ticker) };/*intervali temizler */
    }, [text])

    const tick = () => {
        /*guncellenen metni belirler */
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)/*silmede hizi yariya düsürür */
        }
        if (!isDeleting && updatedText === fullText) {/*metin tamamen goruntulendiginde silme moduna gecer */
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {/*metin tamamen silidniginde yeni donguye gecme */
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (

        <section className="banner" id="home">
           
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>{/* ekstra kucuk sutunlar icin 12ye ayarladim*/}

                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I' m Sıdıka, a "}<span className="wrap">{text}</span></h1>
                        <p>
                            I am a passionate computer engineering student with a strong interest in department.
                            I have experience in various technologies including React, and I am eager to apply my skills to real-world projects.
                            I am also continuously learning and staying up-to-date with the latest trends and advancements in technology.
                            Here you can find a selection of my projects, skills, and a bit about my background.
                        </p>

                        <button onClick={() => window.location.href = 'mailto:fsidika1@gmail.com'}>
                            Let’s Connect<ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={pc2} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

