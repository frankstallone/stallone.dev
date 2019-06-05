import React from 'react'
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const MarkdownPage = ({ children, pageContext: { frontmatter } }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          keywords
        }
      }
    }
  `)
  return (
    <Layout site={data.site} noSubscribeForm>
      <SEO frontmatter={frontmatter} />
      <Container noVerticalPadding>{children}</Container>
    </Layout>
  )
}

export default MarkdownPage
