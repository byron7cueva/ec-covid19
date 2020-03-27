import React from 'react'
import PropTypes from 'prop-types'

import { HeaderContainer } from './style'

/**
 * Header component of the page
 * @author byron7cueva
 */
export const Header = ({ title }) => (
  <HeaderContainer>
    <h1 className='header__title'>{title} - <a href="https://www.gestionderiesgos.gob.ec/informes-de-situacion-covid-19-desde-el-13-de-marzo-del-2020/" target="_blank">Fuente Gestión de Riesgos</a> </h1>
    <p>Fuente no oficial</p>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string
}
