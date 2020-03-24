import React from 'react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps'
import { PatternLines } from '@vx/pattern'
import PropTypes from 'prop-types'

import { MapContainer } from './style'
import { patternScale } from '../../settings/charts'
import { getStyleScale } from '../../utils/charts'

export const Map = ({ data, onClickGeography, selectedPlace }) => (
  <MapContainer>
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 7500
      }}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {
        patternScale.map(scale => (
         <PatternLines
          {...scale}
          key={scale.id}
          height={6}
          width={6}
          strokeWidth={1}
          orientation={[ 'diagonal' ]}
         /> 
        ))
      }
      <ZoomableGroup
        zoom={1}
        center={[-78.00, -1.80]}
      >
        <Geographies
          geography={`maps/provincias.json`}
          onMouseEnter={() => {
            console.log('Enter')
          }}
        >
          {
            ({ geographies }) => (
              geographies.map((geo, i) => {
                const { properties } = geo
                const placeCode = properties.placeCode
                const dataPlace = data.find(d => d.placeCode ===  placeCode)
                let confirmed = false
                let style = getStyleScale()
                let isSelected = false
                if (dataPlace) {
                  confirmed = dataPlace.ConfirmedCases.confirmed > 0
                  style = getStyleScale(dataPlace.ConfirmedCases.confirmed)
                  isSelected = selectedPlace && placeCode === selectedPlace.placeCode
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tip={`${properties.placeName} ${confirmed? dataPlace.confirmed:''}`}
                    style={{
                      default: {
                        fill: isSelected? `url("#${style.id}")` : (confirmed? style.background : 'url("#noCases")'),
                        strokeWidth: isSelected? 3 : 0,
                        stroke: isSelected? style.stroke : null
                      },
                      hover: {
                        strokeWidth: 2,
                        stroke: style.stroke,
                        fill: confirmed? `url("#${style.id}")` : 'url("#noCases")',
                        cursor: confirmed? 'pointer' : 'default'
                      },
                      pressed: {
                        strokeWidth: 3,
                        stroke: style.stroke,
                        fill: confirmed? `url("#${style.id}")` : 'url("#noCases")'
                      }
                    }}
                    onClick={() => {
                      onClickGeography(properties)
                    }}
                  />
                )
              })
            )
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </MapContainer>
)

Map.propTypes = {
  data: PropTypes.array,
  selectedPlace: PropTypes.object,
  onClick: PropTypes.func
}
