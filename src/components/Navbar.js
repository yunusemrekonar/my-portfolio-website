import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import githublogo from '../assets/img/github-mark.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import logovid from "../assets/vid/logovid.gif";
import { Helmet } from "react-helmet";

export const MyNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Konar Works</title>
        <meta
          name="description"
          content="Explore the portfolio of Yunus Emre Konar, a web developer specializing in front-end and back-end development, along with projects in web design and social media management."
        />
        <meta name="author" content="Yunus Emre Konar" />
        <meta
          name="keywords"
          content="web developer, full stack development, portfolio, projects, front-end, back-end, design"
        />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>
      
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img className="logo" src={logovid} alt="Logo" style={{ width: "45vh", height: "auto", marginTop: "-8vh", marginLeft: "-10vh" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/yunus-emre-konar-b9980317a/" target="_blank" rel="noopener noreferrer" alt="Linkedin"><img src={navIcon1} /></a>
                  <a href="https://github.com/yunusemrekonar" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="GitHub" /></a>
                  <a href="https://www.instagram.com/konaryunusemre/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} /></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let’s Connect !</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>
  );
}
