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
import { TotalProvinceChart } from '../container/TotalProvinceChart'
import { placeType } from '../utils/constants'
import { LoadingPartial } from '../components/LoadingPatial'
import { MenuButton } from '../components/MenuButton'
import { Menu } from '../components/Menu'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCases: [],
      selectedPlace: {},
      showMenu: false,
      loading: true
    }
    this.handlerClickGeography = this.handlerClickGeography.bind(this)
    this.handlerOnMouseEnterMap = this.handlerOnMouseEnterMap.bind(this)
    this.handlerClickMenuButton = this.handlerClickMenuButton.bind(this)
  }

  handlerClickGeography (place) {
    const selectedPlace = this.state.totalCases.find(d => d.placeCode ===  place.placeCode)
    if (selectedPlace) {
      this.setState({selectedPlace, showMenu: false})
    }
  }

  handlerOnMouseEnterMap () {
    ReactTooltip.rebuild()
  }

  handlerClickMenuButton () {
    this.setState({showMenu: !this.state.showMenu})
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
          confirmed
          totaldead
          dead
          totalhealed
          healed
          casedate
        }
      }    
    `

    request('/api', query)
    .then(data => {
      const totalCases = data.getAllTotalLastCases
      const country = totalCases.find(item => item.placeTypeId === placeType.country)
      this.setState({totalCases: totalCases, selectedPlace: country, loading: false})
    })
    .catch(error => {
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        { this.state.loading ? <LoadingPartial />
          : <Layout title='Casos confirmados' subtitle='Casos confirmados de covid19 en Ecuador, por país, región, provincia y canton'>
              <div className='flex'>
                <div className='w-50'>
                  <Results data={this.state.selectedPlace} />
                  <Map
                    data={this.state.totalCases}
                    selectedPlace={this.state.selectedPlace}
                    onClickGeography={this.handlerClickGeography}
                    onMouseEnter={this.handlerOnMouseEnterMap}
                  />
                </div>
                <div className='w-50'>
                  <Menu show={this.state.showMenu}>
                    <Table data={this.state.totalCases} onRowClick={this.handlerClickGeography} selectedPlace={this.state.selectedPlace} />
                  </Menu>
                  <DataSection>
                    <TotalHistoryChart placeCode={this.state.selectedPlace.placeCode} placeName={this.state.selectedPlace.placeName} />
                    <DailyHistoryChart placeCode={this.state.selectedPlace.placeCode} placeName={this.state.selectedPlace.placeName} />
                  </DataSection>
                </div>
              </div>
              <TotalProvinceChart/>
              <MenuButton onClick={this.handlerClickMenuButton} clicked={this.state.showMenu}/>
            </Layout>
        }
        <ReactTooltip id='tooltip' html={true} place='top' effect='float' />
      </>
    )
  }
}
