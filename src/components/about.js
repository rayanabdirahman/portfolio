import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const About = () => {
  return (
    <section className="section has-divider about" id="about">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={10}>
            <h1>About</h1>
            <p className="lead">
              I enjoy translating designs into responsive, interactive
              experiences in HTML, CSS, and JavaScript with clean and semantic
              code. I am passionate about building thoughtful web experiences
              and care about the details. I am constantly staying on top of the
              emerging trends, applying industry best practices, and adapting to
              modern web technologies and programs. I have passion for
              self-learning and strive to improve and challenge my skills to
              become better at what I do.
            </p>

            <p className="lead">
              You can find the source code for some of my projects on
              <a
                className="link"
                href="https://github.com/rayanabdirahman"
                target="blank"
              >
                Github
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
