import React from 'react'
import PropTypes from 'prop-types'

import { HeaderContainer } from './style'
import logo from '../../assets/img/logo.png'

/**
 * Header component of the page
 * @author byron7cueva
 */
export const Header = ({ title }) => (
  <HeaderContainer>
    <div>
      <img src={logo} />
      <h1 className='header__title'>{title} - Fuente: <a href="https://www.gestionderiesgos.gob.ec/informes-de-situacion-covid-19-desde-el-13-de-marzo-del-2020/" target="_blank">COE Nacional</a> </h1>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string
}
