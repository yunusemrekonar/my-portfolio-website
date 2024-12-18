import { Container, Row, Col } from "react-bootstrap";
import logovid from "../assets/vid/logovid.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githublogo from "../assets/img/github-mark.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logovid} alt="Logo" style={{ width: "37vh", height: "auto" }}  />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yunus-emre-konar-b9980317a/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><img src={navIcon1} /></a>
              <a href="https://github.com/yunusemrekonar" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="GitHub" /></a>
              <a href="https://www.instagram.com/konaryunusemre/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
