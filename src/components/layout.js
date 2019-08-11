import React from "react"

import Header from "./header"
import Intro from "./intro"
import Work from "./work"
import About from "./about"
import WebFooter from "./footer"

import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <Intro />
      <Work />
      <About />
      {props.children}
      <WebFooter />
    </div>
  )
}

export default Layout
