import React, {useState, useEffect} from 'react'
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from 'react-simple-maps'
import { PatternLines } from '@vx/pattern'
import PropTypes from 'prop-types'

import { MapContainer } from './style'
import { patternScale, colors } from '../../settings/charts'
import { getStyleScale, capitalize } from '../../utils/charts'
import { placeType } from '../../utils/constants'
import { LoadingPartial } from '../LoadingPatial'
import maps from '../../data/maps.yml'

export const Map = ({ data, onClickGeography, selectedPlace, onMouseEnter }) => {
  const [map, setMap] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (selectedPlace.placeTypeId < placeType.canton) {
      setLoading(true)
      setMap(maps[selectedPlace.placeName])
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    } else {
      const place = findPlace(selectedPlace.parentRegion)
      setMap(maps[place.placeName])
    }
  }, [selectedPlace])

  const findPlace = (placeCode) => {
    return data.find(d => d.placeCode ===  placeCode)
  }
  
  return (
    <MapContainer>
      { loading ? <LoadingPartial /> : null }
      { map ? 
        <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          scale: map.scale
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
          center={map.center}
          disablePanning={true}
          disableZooming={true}
        >
          <Geographies
            geography={`maps/${map.file}.json`}
            onMouseEnter={onMouseEnter}
          >
            {
              ({ geographies }) => (
                geographies.map(geo => {
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
                          stroke: isSelected? style.stroke : '#D4D4D4'
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
            geography={`maps/${map.file}.json`}
          >
            { 
              ({ geographies }) => (
                geographies.map(geo => {
                  const { placeCode } = geo.properties
                  const dataPlace = findPlace(placeCode)
                  let confirmed = false, style = getStyleScale()
                  if (dataPlace) {
                    confirmed = dataPlace.totalconfirmed > 0
                    style = getStyleScale(dataPlace.totalconfirmed)
                  }
                  return confirmed ?  
                        <Marker coordinates={[ dataPlace.x, dataPlace.y ]} key={geo.rsmKey}>
                          <circle r={style.radio} fill={colors.confirmed} stroke={colors.confirmed} strokeWidth="2" fillOpacity="0.5" />
                          <text textAnchor="middle" fontSize='14' fontWeight="600" fill='#fff' dy={30}>{capitalize(dataPlace)}</text>
                          <text textAnchor="middle" fontSize='14' fontWeight="600" fill='#fff' dy={5}>{dataPlace.totalconfirmed}</text>
                        </Marker>
                        : null
                }))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      : null
      }
    </MapContainer>
  )
}

Map.propTypes = {
  data: PropTypes.array,
  selectedPlace: PropTypes.object,
  onClick: PropTypes.func
}
