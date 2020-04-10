import React from 'react'
import PropTypes from 'prop-types'

import { FooterContainer } from './style'
import bcLogo from '../../assets/img/bc.png'

export const Footer = ({ author, url }) => (
  <FooterContainer>
    © {new Date().getFullYear()} Construido por &nbsp; <img src={bcLogo} /> &nbsp; <a href={url} target="_blank">{author}</a>
  </FooterContainer>
)

Footer.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string
}
