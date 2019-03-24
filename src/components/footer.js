import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import { rhythm } from "../utils/typography";

const FooterWrapper = styled.div`
  padding: 0;
  text-transform: lowercase;
  position: fixed;
  bottom: 2%;
  right: 2%;
  font-size: ${rhythm(0.4)};

  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 0 0  ${rhythm(0.5)};
  }

  @media (max-width: 700px) {
    padding: ${rhythm(0.5)} 0;
    width: 100%;
    bottom: 0;
    right: 0;
    text-align: center;
    background: #0979a1;

    a {
      color: #fff;
    }
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <Link to="/">archives</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </FooterWrapper>
  )
}

export default Footer;