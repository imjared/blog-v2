import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Post = styled.div`
  margin-bottom: ${rhythm(1)};
  border-bottom: 1px solid rgba(34, 34, 34, 0.125);
`
export const PostHeader = styled.h3`
  margin: 0;
  font-family: "PT Serif", "Georgia", "Helvetica Neue", Arial, sans-serif;
  font-size: ${rhythm(1)};

  a {
    color: #222;
    transitionL color 0.3s;

    &:hover {
      color: #00a3de;
    }
  }
`
export const PostDate = styled.small`
  color: #aaa;
  font-family: "PT Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: ${rhythm(.5)};
  ${'' /* text-transform: uppercase; */}
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="all posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug}>
              <PostHeader>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </PostHeader>
              <PostDate>{node.frontmatter.date}</PostDate>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC
      },
      filter: {
        fileAbsolutePath: { regex: "/content\/blog\/.*.(md|markdown)/"}
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
