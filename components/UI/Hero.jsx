import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/mihal.png";
import classes from "../../styles/hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="5" md="5">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Marruf Mihal</h2>
              <h5 className="mb-4">Developer and Innovator</h5>
              <p>
                Lets connect to discuss how I am bring positive changes for your organization
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://agmsecuritygroup.com/wp-content/uploads/2022/10/MarrufMihalResume-1-1.pdf">Resume</Link>
                </button> 

                <div className="text-3xl flex gap-10 py-5">
              <a className="social" href="https://github.com/mihalmaruf">
              <FaGithub />
              </a>
              <a className="social" href="https://www.linkedin.com/in/marruf-musfik-ahmed-mihal-00b0a4127/">
              <FaLinkedinIn />
              </a>
              <a className="social" href="https://www.instagram.com/mihalmaruf/?hl=en">
              <FaInstagram />
              </a>
              <a className="social" href="https://www.facebook.com/mihal.maruf">
              <FaFacebook />
              </a>
            </div>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="7" md="7">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="450" height="450" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
