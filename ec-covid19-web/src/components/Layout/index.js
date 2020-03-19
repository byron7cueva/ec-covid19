import React from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => (
  <>
    <Header title='Covid19 Ecuador' />
    <main>
      {children}
    </main>
    <Footer writer='@byron7cueva' />
  </>
)
