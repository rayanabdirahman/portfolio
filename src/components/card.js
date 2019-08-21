import React from "react"
import { Col, Figure } from "react-bootstrap"

const WorkCard = props => {
  const { image, title, content, link, footer, github } = props
  return (
    <Col xs={12} sm={6}>
      <a href={link} target="_blank">
        <Figure>
          <Figure.Image styles width={"100%"} alt="171x180" src={image} />
          <Figure.Caption>
            <h3>{title}</h3>
            <p className="lead">{content}</p>
          </Figure.Caption>
        </Figure>
      </a>
      <span>{footer}</span>
      <p className="lead">
        <a class="link" href={github} target="_blank">
          View code on Github
        </a>
      </p>
    </Col>
  )
}

export default WorkCard
