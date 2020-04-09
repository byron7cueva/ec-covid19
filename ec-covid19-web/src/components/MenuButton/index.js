import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { MenuButtonContainer } from './style'
import { colors, size } from '../../settings/constants'

export const MenuButton = ({ onClick, clicked }) => (
  <MenuButtonContainer onClick={onClick}>
    { clicked ? <AiOutlineClose size={size.icons.laptop} color={colors.light} /> : <AiOutlineMenu size={size.icons.laptop} color={colors.light} /> }
  </MenuButtonContainer>
)
