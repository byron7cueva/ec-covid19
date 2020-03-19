import React from 'react'
import PropTypes from 'prop-types'

export const Footer = ({ author, url }) => (
  <footer>
    © {new Date().getFullYear()} Construido por
    <a href={url}>{author}</a>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string
}
