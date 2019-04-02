import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { PostHeader } from '../pages';

const HeaderGroup = styled.header`
  margin-bottom: ${rhythm(0.5)};
`

class StaticPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <HeaderGroup>
          <PostHeader>{post.frontmatter.title}</PostHeader>
        </HeaderGroup>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default StaticPageTemplate

export const pageQuery = graphql`
  query StaticBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
