import React from 'react'
import PropTypes from 'prop-types'

import { FooterContainer } from './style'

export const Footer = ({ author, url }) => (
  <FooterContainer>
    © {new Date().getFullYear()} Construido por &nbsp; <a href={url}>{author}</a>
  </FooterContainer>
)

Footer.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string
}
