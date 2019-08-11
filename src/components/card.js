import React from "react"
import { Col, Card, Figure } from "react-bootstrap"

const WorkCard = props => {
  const { image, title, content } = props
  return (
    <Col xs={12} sm={6}>
      <a href="#">
        <Figure>
          <Figure.Image styles width={"100%"} alt="171x180" src={image} />
          <Figure.Caption>
            <h3>{title}</h3>
            <p className="lead">{content}</p>
          </Figure.Caption>
        </Figure>
      </a>
    </Col>
  )
}

export default WorkCard
