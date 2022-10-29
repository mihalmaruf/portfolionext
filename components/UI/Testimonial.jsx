import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>

                  <div>
                    <h6>Craig Grams</h6>
                    <h6>Product Manager at Ashley Furniture</h6>
                  </div>
                </div>

                <p>
                Mihal was crucial to my team, and contributed significantly to the success of the company re-platforming initiative. Proactive, ambitious, committed and broad-minded perfectionist. Mihal is dedicated, self-motivated, methodical, and very capable. He showed a high level of content-management, SEO, focused technical skills and was a valuable contributor to our projects. I could always depend on him to set the best example as full stack developer at The Ultimate 3D Printing Company. Certainly someone I'd want to to have on my team.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>

                  <div>
                    <h6>Ali Dahmash</h6>
                    <h6>Senior Digital Marketing Strategist</h6>
                  </div>
                </div>

                <p>
                I have worked with Marruff at Ultimate 3D Printing Store. He used to report to me directly. He has great understanding of web development, Shopify and is an expert in Html, CSS, Bootstrap, Materialize, WordPress, JavaScript, C#, SQL, and PHP. He has a very pleasant character and easy to work with. He is of high value and asset to any cooperation.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
