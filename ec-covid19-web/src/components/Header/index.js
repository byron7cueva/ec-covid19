import React from 'react'
import PropTypes from 'prop-types'

/**
 * Header component of the page
 * @author byron7cueva
 */
export const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string
}
