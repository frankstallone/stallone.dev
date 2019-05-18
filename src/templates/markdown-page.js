import React from 'react'
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const MarkdownPage = ({ children, pageContext: { frontmatter } }) => {
  return (
    <Layout noSubscribeForm>
      <SEO frontmatter={frontmatter} />
      <Container noVerticalPadding>{children}</Container>
    </Layout>
  )
}

export default MarkdownPage
