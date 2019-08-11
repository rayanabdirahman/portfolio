import React from "react"
import WorkCard from "./card"
import { Container, Row } from "react-bootstrap"

const Work = () => {
  return (
    <section className="section work" id="work">
      <Container>
        <Row>
          <WorkCard
            image="https://via.placeholder.com/150"
            title="Header 1"
            content="Travel template featuring a slider with a swipe transition built
              with CSS Grid and Flexbox."
          />
          <WorkCard
            image="https://via.placeholder.com/150"
            title="Header 2"
            content="Travel template featuring a slider with a swipe transition built
              with CSS Grid and Flexbox."
          />
          <WorkCard
            image="https://via.placeholder.com/150"
            title="Header 3"
            content="Travel template featuring a slider with a swipe transition built
              with CSS Grid and Flexbox."
          />
          <WorkCard
            image="https://via.placeholder.com/150"
            title="Header 4"
            content="Travel template featuring a slider with a swipe transition built
              with CSS Grid and Flexbox."
          />
        </Row>
      </Container>
    </section>
  )
}

export default Work
