import React from 'react'
import PropTypes from 'prop-types'

import { ItemResultContainer } from './style'

export const ItemResult = ({ total, daily, description, color }) => (
  <ItemResultContainer color={color}>
    <div className='item-result__total'>
      <h3>{total ? total : 0}</h3>
      <div className='item-result__now'>
        <h5>{daily}</h5>
        <small>Hoy</small>
      </div>
    </div>
    <p>{description}</p>
  </ItemResultContainer>
)

ItemResult.propTypes = {
  total: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.string
}