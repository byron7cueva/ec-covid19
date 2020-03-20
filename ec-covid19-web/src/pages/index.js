import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import { GlobalStyle } from '../styles/core/global'
import { Layout } from '../components/Layout'
import { Map } from '../components/Map'
import { DataSection } from '../components/DataSection'
import { Results } from '../components/Results'
import { Table } from '../components/Table'


const data = [
  {
    placeCode: '01',
    placeName: 'Azuay',
    infected: 60,
    actived: 5,
    dead: 5,
    healed: 2
  },
  {
    placeCode: '02',
    placeName: 'Bolivar',
    infected: 120,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '03',
    placeName: 'Cañar',
    infected: 15,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '04',
    placeName: 'Carchi',
    infected: 350,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '05',
    placeName: 'Cotopaxi',
    infected: 10,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '06',
    placeName: 'Chomborazo',
    infected: 10,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '07',
    placeName: 'El Oro',
    infected: 10,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '08',
    placeName: 'Esmeraldas',
    infected: 10,
    actived: 7,
    dead: 8,
    healed: 3
  },
  {
    placeCode: '09',
    placeName: 'Guayas',
    infected: 10,
    actived: 7,
    dead: 8,
    healed: 3
  }
]

class IndexPage extends Component {
  countryData = {
    infected: 0,
    actived: 0,
    dead: 0,
    healed: 0
  }

  countryProperties = {
    placeName: 'Ecuador'
  }

  state = {
    selectedPlace: {},
    currentStatistics: {}
  }

  handlerClickGeography = (properties) => {
    const statistic = data.find(d => d.placeCode === properties.placeCode )
    if (statistic) {
      this.setState({selectedPlace: properties, currentStatistics: statistic })
    } else {
      this.setCountryData()
    }
  }

  setCountryData() {
    this.setState({selectedPlace: this.countryProperties, currentStatistics: this.countryData })
  }

  componentDidMount() {
    this.setCountryData();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Map
            data={data}
            selectedPlace={this.state.selectedPlace}
            onClickGeography={this.handlerClickGeography}
          />
          <DataSection>
            <Results statistics={this.state.currentStatistics} placeName={this.state.selectedPlace.placeName}/>
            <Table data={data} onRowClick={this.handlerClickGeography} selectedPlace={this.state.selectedPlace} />
          </DataSection>
        </Layout>
        <ReactTooltip html={true} />
      </>
    )
  }
}

export default IndexPage
