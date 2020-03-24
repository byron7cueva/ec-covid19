import React from 'react'
import PropTypes from 'prop-types'

import { Main } from './style'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Header title='Ecuador Covid19' />
      <Main>
        {children}
      </Main>
      <Footer author='Byron Cueva' url='https://github.com/byron7cueva' />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
