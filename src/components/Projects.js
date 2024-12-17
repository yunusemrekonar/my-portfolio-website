import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Konar Law & Consulting Firm",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://www.konarhukuk.com/"
    },
    {
      title: "Language Education Program",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/yunusemrekonar/language-education-program"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am constantly exploring new ideas and pushing the boundaries of what can be achieved with full stack development. Below, you’ll find a selection of the projects I’ve worked on, demonstrating my expertise in both frontend and backend development. If you have an exciting project in mind or need assistance bringing your ideas to life, feel free to reach out. Let’s collaborate and make something amazing together!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
                                <ProjectCard
                                  {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Emre</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Emre</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}
