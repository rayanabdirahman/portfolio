import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={10}>
            <h1>
              Hi! I'm Ayan Mohamed, a fullstack javascript developer based in
              London.
            </h1>
            <p className="lead">
              I enjoy crafting digital experiences through design and code. I
              specialize in fullstack javascript development, focusing on
              turning ideas into delightful and meaningful solutions.
            </p>

            <p className="lead">
              <a className="link" href="#about">
                More about me
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Intro
