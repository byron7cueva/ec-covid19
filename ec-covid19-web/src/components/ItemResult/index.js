import React from 'react'
import PropTypes from 'prop-types'

import { ItemResultContainer } from './style'

export const ItemResult = ({ total, description, color }) => (
  <ItemResultContainer color={color}>
    <h3>{total}</h3>
    <p>{description}</p>
  </ItemResultContainer>
)

ItemResult.propTypes = {
  total: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.string
}