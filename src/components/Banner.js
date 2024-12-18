import { useRef, useState, useEffect } from "react";
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
  const [isInScrollRange, setIsInScrollRange] = useState(true); 
  const toRotate = ["Web Developer", "Web Designer","Social Media Manager", "UI/UX Designer"];
  const period = 1500;

  const txtRotateRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (txtRotateRef.current) {
      txtRotateRef.current.style.color = '#ff5733';
    }
    if (wrapRef.current) {
      wrapRef.current.style.color = '#7f00ff';
    }
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerHeight = 200;
    setIsInScrollRange(scrollY <= triggerHeight);
  };

  useEffect(() => {
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
                  <h1>
                    Hi! I'm Emre <br />
                    <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Web Designer","Social Media Manager", "UI/UX Designer" ]' ref={txtRotateRef}>
                      <span className="wrap" ref={wrapRef}>{text}</span>
                    </span>
                  </h1>
                  <p>
                  In today’s world, where the demand for digital solutions is ever-increasing, I’m Yunus Emre Konar, here to offer innovative solutions in web development, mobile application development, program development, and social media expertise. With my creative and user-friendly projects, I aim to strengthen your digital presence, streamline your business processes, and enhance your social media strategies. Whatever your goal may be, I’m here to provide tailored solutions to help elevate your success. Explore my website, and let’s bring your projects to life together!                  </p>
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
