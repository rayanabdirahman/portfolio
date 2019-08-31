import React from "react"

import { Navbar, Container, Row, Col, Figure, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Row>
          <Col xs={6} sm={6} md={6}>
            <Navbar.Brand href="#home">
              <Figure>
                <Figure.Image
                  styles
                  width={60}
                  height={60}
                  alt="171x180"
                  src="https://via.placeholder.com/150/FF0000/FFFFFF"
                  roundedCircle
                />
                <Figure.Caption>Rayan Mohamed</Figure.Caption>
              </Figure>
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">
            <a href="mailto:ayanmohamed65@gmail.com">Contact</a>
          </Nav.Link>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Header
