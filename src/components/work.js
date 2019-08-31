import React from "react"
import WorkCard from "./card"
import { Container, Row } from "react-bootstrap"

const Work = () => {
  return (
    <section className="section work" id="work">
      <Container>
        <Row>
          <WorkCard
            image="https://cdn.dribbble.com/users/1425161/screenshots/5966666/attachments/1283123/cryptocompare_all.png"
            link="https://adoring-payne-589ee3.netlify.com/"
            github="https://github.com/rayanabdirahman/crypto-dashboard"
            title="CryptoCompare"
            content="A crypto currancy dashboard"
            footer="Built to demonstarte data visualization using: React, Highcharts, styled-componets &amp; CSS Grid"
          />
        </Row>
      </Container>
    </section>
  )
}

export default Work
