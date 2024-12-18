import { Helmet } from "react-helmet";
import logodesign from "../assets/img/logodesign.svg";
import web from "../assets/img/web.svg";
import socialmedia from "../assets/img/socialmedia.svg";
import mobileapp from "../assets/img/mobileapp.svg";
import ui from "../assets/img/ui.svg";
import brand from "../assets/img/brand.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Yunus Emre Konar | Skills & Services</title>
        <meta
          name="description"
          content="Explore the services and skills offered by Yunus Emre Konar, including web development, UI/UX design, mobile app development, and brand identity."
        />
        <meta name="author" content="Yunus Emre Konar" />
        <meta
          name="keywords"
          content="web development, UI/UX design, mobile app development, logo design, social media management, brand identity"
        />
        <link rel="canonical" href="https://yourwebsite.com/skills" />
      </Helmet>

      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Services</h2>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={web} alt="Web Development" />
                    <h5>Web Development</h5>
                    <p>I create innovative and user-friendly websites to help you establish a strong digital presence.</p>
                  </div>
                  <div className="item">
                    <img src={socialmedia} alt="Social Media Management" />
                    <h5>Social Media Management</h5>
                    <p>I help position your brand effectively on social media platforms, reaching your target audience with the right strategies.</p>
                  </div>
                  <div className="item">
                    <img src={logodesign} alt="Logo Design" />
                    <h5>Logo Design</h5>
                    <p>I design striking and memorable logos that perfectly capture your brand's essence and vision.</p>
                  </div>
                  <div className="item">
                    <img src={brand} alt="Brand Identity" />
                    <h5>Brand Identity</h5>
                    <p>I build a unique and powerful brand identity that reflects your brand’s values and message.</p>
                  </div>
                  <div className="item">
                    <img src={ui} alt="UI/UX Design" />
                    <h5>UI/UX Design</h5>
                    <p>I design intuitive and aesthetically pleasing interfaces that enhance user experience and engagement.</p>
                  </div>
                  <div className="item">
                    <img src={mobileapp} alt="Mobile App Development" />
                    <h5>Mobile App Development</h5>
                    <p>I develop user-friendly, high-performance mobile applications for both Android and iOS platforms.</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
      </section>
    </>
  );
};
