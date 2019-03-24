import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"

import Footer from '../components/footer';
import { rhythm } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #F8F8F8;
  }
`

const TopBorder = styled.span`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: block;
  height: 5px;
  width: 100%;
  background: linear-gradient(#065a7f, #0979a1);
`
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (!location.pathname === rootPath) {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <GlobalStyle />
        <Helmet>
          <link href="/static/favicon.png" rel="icon" />
          <link href="http://fonts.googleapis.com/css?family=Monda|PT+Serif:regular,italic,bold|PT+Sans" rel="stylesheet" type="text/css" />
        </Helmet>
        <TopBorder />
        <Wrapper>
          <header>{header}</header>
          <main>{children}</main>
        </Wrapper>
        <Footer />
      </>
    )
  }
}

export default Layout
