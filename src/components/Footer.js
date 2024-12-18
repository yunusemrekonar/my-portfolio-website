import { Container, Row, Col } from "react-bootstrap";
import logovid from "../assets/vid/logovid.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githublogo from "../assets/img/github-mark.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Helmet } from "react-helmet";

export const Footer = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Konar Works</title>
        <meta
          name="description"
          content="Connect with Yunus Emre Konar through social media and explore the portfolio showcasing web development, design, and more."
        />
        <meta name="author" content="Yunus Emre Konar" />
        <meta
          name="keywords"
          content="Footer, Web Developer, Social Media, GitHub, LinkedIn, Portfolio"
        />
        <link rel="canonical" href="https://yourwebsite.com/footer" />
      </Helmet>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img className="logo" src={logovid} alt="Logo" style={{ width: "50vh", height: "auto" }}  />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yunus-emre-konar-b9980317a/" target="_blank" rel="noopener noreferrer" alt="Linkedin">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/yunusemrekonar" target="_blank" rel="noopener noreferrer">
                  <img src={githublogo} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/konaryunusemre/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
