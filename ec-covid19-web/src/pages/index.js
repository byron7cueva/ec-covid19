import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import { GlobalStyle } from '../styles/core/global'
import { Layout } from '../components/Layout'
import { Map } from '../components/Map'
import { DataSection } from '../components/DataSection'
import { Results } from '../components/Results'
import { Table } from '../components/Table'
import { LineChart } from '../components/LineChart'
import { colors } from '../settings/charts'


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

const alterDay = (date, days) => {
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('es-EC', {year: 'numeric', month: 'numeric', day: 'numeric'}).split('/').reverse().join('-')
}

const cases = {
  '01': [
    {
      id: 'infected',
      color: colors.infected,
      data: [
        { y: 1, x: alterDay(new Date(), -2 )},
        { y: 3, x: alterDay(new Date(), -1 )},
        { y: 15, x: alterDay(new Date(), 0) }
      ]
    },
    {
      id: 'dead',
      color: colors.dead,
      data: [
        { y: 0, x: alterDay(new Date(), -2 )},
        { y: 1, x: alterDay(new Date(), -1 )},
        { y: 2, x: alterDay(new Date(), 0)}
      ]
    },
    {
      id: 'healed',
      color: colors.healed,
      data: [
        { y: 0, x: alterDay(new Date(), -2 )},
        { y: 1, x: alterDay(new Date(), -1 )},
        { y: 3, x: alterDay(new Date(), 0)}
      ]
    },
    {
      id: 'actived',
      color: colors.actived,
      data: [
        { y: 1, x: alterDay(new Date(), -2 )},
        { y: 1, x: alterDay(new Date(), -1 )},
        { y: 10, x: alterDay(new Date(), 0)}
      ]
    }
  ],
  '02': [
    {
      id: 'infected',
      color: colors.infected,
      data: [
        { y: 2, x: alterDay(new Date(), -2 )},
        { y: 3, x: alterDay(new Date(), -1 )},
        { y: 1000, x: alterDay(new Date(), 0) }
      ]
    },
    {
      id: 'dead',
      color: colors.dead,
      data: [
        { y: 12, x: alterDay(new Date(), -2 )},
        { y: 3, x: alterDay(new Date(), -1 )},
        { y: 1, x: alterDay(new Date(), 0)}
      ]
    },
    {
      id: 'healed',
      color: colors.healed,
      data: [
        { y: 4, x: alterDay(new Date(), -2 )},
        { y: 6, x: alterDay(new Date(), -1 )},
        { y: 10, x: alterDay(new Date(), 0)}
      ]
    },
    {
      id: 'actived',
      color: colors.actived,
      data: [
        { y: 1, x: alterDay(new Date(), -2 )},
        { y: 13, x: alterDay(new Date(), -1 )},
        { y: 16, x: alterDay(new Date(), 0)}
      ]
    }
  ]
}

class IndexPage extends Component {
  state = {
    selectedPlace: {},
    currentCases: {},
    currentHistory: cases['01'],
    countryCases: {
      infected: 0,
      actived: 0,
      dead: 0,
      healed: 0
    }
  }

  handlerClickGeography = (properties) => {
    const currentCase = data.find(d => d.placeCode === properties.placeCode )
    if (currentCase) {
      this.setState({selectedPlace: properties, currentCases: currentCase, currentHistory: cases[properties.placeCode] })
    }
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
            <Results statistics={this.state.countryCases} placeName='Ecuador'/>
            <Table data={data} onRowClick={this.handlerClickGeography} selectedPlace={this.state.selectedPlace} />
            <LineChart data={this.state.currentHistory} />
          </DataSection>
        </Layout>
        <ReactTooltip html={true} />
      </>
    )
  }
}

export default IndexPage
