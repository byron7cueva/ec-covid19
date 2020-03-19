import React from 'react'
import PropTypes from 'prop-types'

import { HeaderContainer } from './style'

/**
 * Header component of the page
 * @author byron7cueva
 */
export const Header = ({ title }) => (
  <HeaderContainer>
    <h1 className='header__title'>{title}</h1>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string
}
