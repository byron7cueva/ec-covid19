import React from 'react'
import PropTypes from 'prop-types'

import { HeaderContainer } from './style'

/**
 * Header component of the page
 * @author byron7cueva
 */
export const Header = ({ title }) => (
  <HeaderContainer>
    <h1 className='header__title'>{title} - <a href="https://www.salud.gob.ec/actualizacion-de-casos-de-coronavirus-en-ecuador/">Fuente MSP</a> </h1>
    <p>Fuente no oficial</p>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string
}
