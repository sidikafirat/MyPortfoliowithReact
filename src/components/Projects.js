import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import readme2 from "../assets/img/readme2.png";
import portfolio from "../assets/img/portfolio.png";
import cicekkadin from "../assets/img/cicekkadin.png";
import patilidost from "../assets/img/patilidostlar.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [/*proje bilgilerini iceren dizi*/
    {
      title: "To-Do List",
      description: "Task Management App",
      imgUrl: readme2,
      category: "react",
      link: "https://sidikafirat.github.io/React-Todo-App/"
    },
    {
      title: "My Portfolio Website",
      description: "Personal Portfolio",
      imgUrl: portfolio,
      category: "react",
      link: "https://sidikafirat.github.io/portfolio/"
    },
    {
      title: "Çicek Kadın",
      description: "Awareness Project For Women",
      imgUrl: cicekkadin,
      category: "bootstrap",
      link: "https://sidikafirat.github.io/cicek-kadin/"
    },
    {
      title: "Patili Dostlar",
      description: "Educational Animal Feeding Game",
      imgUrl: patilidost,
      category: "others",
      link: "https://sidikafirat.github.io/patili-dostlar/"
    }
  ];

  // Proje sayisini kategoriye gore hesaplama
  const getCategoryCount = (category) => {
    return projects.filter((project) => project.category === category).length;
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Discover a selection of projects that demonstrate my expertise and dedication. Each project reflects my ability to tackle complex challenges and deliver impactful solutions. Browse through to see how I've applied my skills to create value and drive success.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>{/*kategori secim baglantilari*/}
                        <Nav.Link eventKey="first">
                          React
                          <span className="category-count-container">{getCategoryCount("react")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Bootstrap
                          <span className="category-count-container">{getCategoryCount("bootstrap")}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Others
                          <span className="category-count-container">{getCategoryCount("others")}</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">{/*katergoilere gore proje listeleri */}
                        <Row>
                          {projects.filter((project) => project.category === "react").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.filter((project) => project.category === "bootstrap").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.filter((project) => project.category === "others").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
