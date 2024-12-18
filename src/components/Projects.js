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
          <Row size={20}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                By combining creativity and innovation, I strive for excellence in every project I undertake. Here, you can explore the projects I have worked on and successfully completed. Each project is not just a task, but an opportunity for new experiences and learning. From web development and mobile applications to software solutions, each project has its own unique challenges, and I’ve delivered the best solutions for each one. These projects reflect my professional skills and my passion for technology. Take a look, get inspired, and see how I can contribute to your future projects!               
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Latest Works</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col md={6} key={index} className="mb-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <ProjectCard {...project} />
                                </a>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Row>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}
