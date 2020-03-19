import React from 'react'
import PropTypes from 'prop-types'

export const Footer = ({ writer, url }) => (
  <footer>
    © {new Date().getFullYear()} Construido por
    <a href={url}>{writer}</a>
  </footer>
)

Footer.propTypes = {
  writer: PropTypes.string,
  url: PropTypes.string
}
