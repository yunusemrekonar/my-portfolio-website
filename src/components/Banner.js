import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100); 
  const [index, setIndex] = useState(1);
  const [isInScrollRange, setIsInScrollRange] = useState(false); 
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 1500; 


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; 
      const triggerHeight = 200; 
      setIsInScrollRange(scrollY <= triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInScrollRange) {
      const ticker = setInterval(() => tick(), delta);
      return () => clearInterval(ticker);
    }
  }, [text, delta, isInScrollRange]);

  const tick = () => {
    const currentText = toRotate[loopNum % toRotate.length];
    const updatedText = isDeleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(80); 
    }

    if (!isDeleting && updatedText === currentText) {
      setIsDeleting(true);
      setDelta(period); 
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('connect');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible && isInScrollRange ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    Hi! I'm Emre{" "}
                    <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  My passion for software development drives me to create innovative solutions that help users. With expertise in both front-end and back-end technologies, I design and develop web applications and dynamic user interfaces. This portfolio highlights the projects I've worked on, showcasing my commitment to delivering user-centered, functional solutions. Let's create amazing projects together!
                  </p>
                  <button onClick={scrollToContact}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible && isInScrollRange ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
