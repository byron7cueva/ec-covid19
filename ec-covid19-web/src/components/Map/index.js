import React from 'react'
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from 'react-simple-maps'
import { PatternLines } from '@vx/pattern'
import PropTypes from 'prop-types'

import { MapContainer } from './style'
import { patternScale, colors } from '../../settings/charts'
import { getStyleScale } from '../../utils/charts'

export const Map = ({ data, onClickGeography, selectedPlace, onMouseEnter }) => {

  const findPlace = (placeCode) => {
    const regions = data[0].subRows
    let result
    regions.forEach(reg => {
      const place = reg.subRows.find(d => d.placeCode ===  placeCode)
      if (place) {
        result = place
        return
      }
    })
    return result
  }
  return (
    <MapContainer>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          scale: 8000
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
          center={[-78.05, -2.00]}
          disablePanning={true}
          disableZooming={true}
        >
          <Geographies
            geography={`maps/provincias.json`}
            onMouseEnter={onMouseEnter}
          >
            {
              ({ geographies }) => (
                geographies.map((geo, i) => {
                  const { placeCode, placeName } = geo.properties
                  const dataPlace = findPlace(placeCode)
                  let confirmed = false, style = getStyleScale(), isSelected = false
                  if (dataPlace) {
                    confirmed = dataPlace.totalconfirmed > 0
                    style = getStyleScale(dataPlace.totalconfirmed)
                    isSelected = selectedPlace && placeCode === selectedPlace.placeCode
                  }
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-tip={`${placeName} ${confirmed? dataPlace.totalconfirmed:''}`}
                      data-for='tooltip'
                      style={{
                        default: {
                          fill: isSelected? `url("#${style.id}")` : (confirmed? style.background : 'url("#noCases")'),
                          strokeWidth: isSelected? 3 : 0.3,
                          stroke: isSelected? style.stroke : '#000'
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
                        onClickGeography(geo.properties)
                      }}
                    />
                  )
                })
              )
            }
          </Geographies>
          <Geographies
            geography={`maps/provincias.json`}
          >
            { 
              ({ geographies }) => (
                geographies.map((geo, i) => {
                  const { placeCode, placeName } = geo.properties
                  const dataPlace = findPlace(placeCode)
                  let confirmed = false, style = getStyleScale()
                  if (dataPlace) {
                    confirmed = dataPlace.totalconfirmed > 0
                    style = getStyleScale(dataPlace.totalconfirmed)
                  }
                  return confirmed ?  
                        <Marker coordinates={[ dataPlace.x, dataPlace.y ]} key={geo.rsmKey}>
                          <circle r={style.radio} fill={colors.confirmed} stroke={colors.confirmed} strokeWidth="2" fillOpacity="0.5" />
                          <text textAnchor="middle" fontSize='14' fontWeight="600" fill='#fff' dy={27}>{placeName}</text>
                        </Marker>
                        : null
                }))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </MapContainer>
  )
}

Map.propTypes = {
  data: PropTypes.array,
  selectedPlace: PropTypes.object,
  onClick: PropTypes.func
}
