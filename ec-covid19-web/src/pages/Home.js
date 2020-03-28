import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import { request } from 'graphql-request'

import { GlobalStyle } from '../styles/core/global'
import { Layout } from '../components/Layout'
import { Map } from '../components/Map'
import { DataSection } from '../components/DataSection'
import { Results } from '../components/Results'
import { Table } from '../components/Table'
import { LineChartQuery } from '../container/LineChartQuery'
import { placeType } from '../utils/constants'
import { LoadingPartial } from '../components/LoadingPatial'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCases: [],
      selectedPlace: {},
      countryCases: null,
      loading: true
    }
    this.handlerClickGeography = this.handlerClickGeography.bind(this)
  }

  handlerClickGeography(place) {
    this.setState({selectedPlace: place})
  }

  componentDidMount() {
    this.getTotalConfirmedCases()
  }

  getTotalConfirmedCases () {
    const query = `
      query {
        getTotalConfirmedCases {
          placeId
          placeCode
          placeName
          x
          y
          placeTypeId
          parentRegion
          ConfirmedCases {
            caseDate
            confirmed
            dead
            healed
            updateDate
          }
        }
      }    
    `

    request('/api', query)
    .then(data => {
      const totalCases = data.getTotalConfirmedCases
      const country = totalCases.find(item => item.placeTypeId === placeType.country)
      const provinces = totalCases.filter(item => item.placeTypeId === placeType.province)
      provinces.forEach(prov => {
        prov.subRows = totalCases.filter(item => item.placeTypeId === placeType.canton && item.parentRegion === prov.placeId)
      })
      country.subRows = provinces
      country.expanded = true
      this.setState({totalCases: [country], countryCases: country, selectedPlace: country, loading: false})
    })
    .catch(error => {
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        { this.state.loading ? <LoadingPartial />
          : <Layout>
              <Map
                data={this.state.totalCases}
                selectedPlace={this.state.selectedPlace}
                onClickGeography={this.handlerClickGeography}
              />
              <DataSection>
                <Results data={this.state.countryCases} />
                <Table data={this.state.totalCases} onRowClick={this.handlerClickGeography} selectedPlace={this.state.selectedPlace} />
                <LineChartQuery placeCode={this.state.selectedPlace.placeCode} />
              </DataSection>
            </Layout>
        }
        <ReactTooltip html={true} />
      </>
    )
  }
}
