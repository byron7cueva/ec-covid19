import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import { Main } from './style'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Covid19 Ecuador</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Header title='Ecuador Covid19' />
      <Main>
        {children}
      </Main>
      <Footer author='@byron7cueva' url='https://github.com/byron7cueva' />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
