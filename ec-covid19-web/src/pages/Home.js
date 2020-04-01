import React, { Component } from 'react'
import { request } from 'graphql-request'
import ReactTooltip from 'react-tooltip'

import { GlobalStyle } from '../styles/core/global'
import { Layout } from '../components/Layout'
import { Map } from '../components/Map'
import { DataSection } from '../components/DataSection'
import { Results } from '../components/Results'
import { Table } from '../components/Table'
import { TotalHistoryChart } from '../container/TotalHistoryChart'
import { DailyHistoryChart } from '../container/DailyHistoryChart'
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
    this.handlerOnMouseEnterMap = this.handlerOnMouseEnterMap.bind(this)
  }

  handlerClickGeography(place) {
    this.setState({selectedPlace: place})
  }

  handlerOnMouseEnterMap () {
    ReactTooltip.rebuild()
  }

  componentDidMount() {
    this.getTotalConfirmedCases()
  }

  getTotalConfirmedCases () {
    const query = `
      query {
        getAllTotalLastCases{
          placeCode
          placeName
          x
          y
          placeTypeId
          parentRegion
          totalconfirmed
          totaldead
          totalhealed
          casedate
        }
      }    
    `

    request('/api', query)
    .then(data => {
      const totalCases = data.getAllTotalLastCases
      const country = totalCases.find(item => item.placeTypeId === placeType.country)
      const region = totalCases.filter(item => {
        if (item.placeTypeId === placeType.region) {
          item.expanded = true
          return true
        }
        return false
      })
      const provinces = totalCases.filter(item => item.placeTypeId === placeType.province)
      provinces.forEach(prov => {
        prov.subRows = totalCases.filter(item => item.placeTypeId === placeType.canton && item.parentRegion === prov.placeCode)
      })
      region.forEach(reg => {
        reg.subRows = totalCases.filter(item => item.placeTypeId === placeType.province && item.parentRegion === reg.placeCode)
      })
      country.subRows = region
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
                onMouseEnter={this.handlerOnMouseEnterMap}
              />
              <DataSection>
                <Results data={this.state.countryCases} />
                <Table data={this.state.totalCases} onRowClick={this.handlerClickGeography} selectedPlace={this.state.selectedPlace} />
                <TotalHistoryChart placeCode={this.state.selectedPlace.placeCode} placeName={this.state.selectedPlace.placeName} />
                <DailyHistoryChart placeCode={this.state.selectedPlace.placeCode} placeName={this.state.selectedPlace.placeName} />
              </DataSection>
            </Layout>
        }
        <ReactTooltip id='tooltip' html={true} place='top' effect='float' />
      </>
    )
  }
}
