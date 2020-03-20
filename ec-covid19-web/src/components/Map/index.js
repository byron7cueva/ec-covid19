import React from 'react'
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps'
import { PatternLines } from '@vx/pattern'
import PropTypes from 'prop-types'

import { MapContainer } from './style'
import maps from '../../data/maps.yml'
import { patternScale } from '../../settings/charts'
import { getStyleScale } from '../../utils/chats'

const map = maps['PROVINCIAS']

export const Map = ({ data, onClickGeography, selectedPlace }) => (
  <MapContainer>
    <ComposableMap
      projection='geoMercator'
      projectionConfig={{
        scale: 2600
      }}
      width={300}
      height={300}
      style={{
        width: '100%',
        height: '60vh'
      }}
    >
      {
        patternScale.map(scale => (
         <PatternLines
          {...scale}
          key={scale.id}
          height={6}
          width={6}
          strokeWidth={0.3}
          orientation={[ 'diagonal' ]}
         /> 
        ))
      }
      <ZoomableGroup
        zoom={1}
        center={[-78.00, -1.80]}
      >
        <Geographies
          geography={`maps/${map.filename}`}
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
                const infected = dataPlace && dataPlace.infected > 0
                const style = getStyleScale(dataPlace)
                const isSelected = selectedPlace && placeCode === selectedPlace.placeCode
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tip={`${properties.placeName} ${infected? dataPlace.infected:''}`}
                    style={{
                      default: {
                        fill: isSelected? `url("#${style.id}")` : (infected? style.background : 'url("#noCases")'),
                        strokeWidth: isSelected? 1 : 0,
                        stroke: isSelected? style.stroke : null
                      },
                      hover: {
                        strokeWidth: 1,
                        stroke: style.stroke,
                        fill: infected? `url("#${style.id}")` : 'url("#noCases")',
                        cursor: infected? 'pointer' : 'default'
                      },
                      pressed: {
                        strokeWidth: 1,
                        stroke: style.stroke,
                        fill: infected? `url("#${style.id}")` : 'url("#noCases")'
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
  selectedPlace: PropTypes.string,
  onClick: PropTypes.func
}
