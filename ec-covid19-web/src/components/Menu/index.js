import React from 'react'

import { MenuContainer } from './style'

export const Menu = ({ children, show }) => (
  <MenuContainer className={show ? 'show' : null}>
    {children}
  </MenuContainer>
)
