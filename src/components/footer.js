import React from "react"
import { Container, Row, Col, Footer } from "react-bootstrap"

const WebFooter = () => {
  return (
    <section className="section footer" id="contact">
      <Container>
        <Row>
          <Col xs={6} sm={6} md={6}>
            <p className="lead">
              <a className="link" href="https://github.com/rayanabdirahman">
                Github
              </a>
            </p>
            <p className="lead">
              <a className="link" href="mailto:ayanmohamed65@gmail.com">
                Email
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WebFooter
