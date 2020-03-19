import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            urlAuthor
          }
        }
      }
    `
  )

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <Footer author={data.site.siteMetadata.author} url={data.site.siteMetadata.urlAuthor} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
