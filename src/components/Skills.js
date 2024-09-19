import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {/*carousel icin responsive kodlari */
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },//en genis ekran boyutlari
            items: 5//gosterilecek skill sayisi
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },//masaüstü, laptoplar icin
            items: 3//gosterilecek skill sayisi
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },//tablet ekranlari icin
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },//telefonlar icin
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Here is a list of technologies and concepts I am familiar with. I am continuously learning and staying up-to-date with the latest trends and advancements in technology.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {/*carousel'e ekledigim skiller*/}
                                <div className="item">
                                    <h5>React </h5>
                                </div>
                                <div className="item">
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <h5>Algorithm</h5>
                                </div>
                                <div className="item">
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <h5>HTML-CSS</h5>
                                </div>
                                <div className="item">
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <h5>BootStrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    )
}

