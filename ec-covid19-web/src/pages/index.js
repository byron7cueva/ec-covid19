import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

import { GlobalStyle } from '../styles/core/global'
import { Layout } from '../components/Layout'
import { Map } from '../components/Map'


const data = [
  {
    placeCode: '01',
    infected: 60,
    activos: 5,
    muertos: 5,
    recuperados: 2
  },
  {
    placeCode: '02',
    infected: 120,
    activos: 7,
    muertos: 8,
    recuperados: 3
  },
  {
    placeCode: '03',
    infected: 15,
    activos: 7,
    muertos: 8,
    recuperados: 3
  },
  {
    placeCode: '04',
    infected: 350,
    activos: 7,
    muertos: 8,
    recuperados: 3
  }
]

class IndexPage extends Component {
  state = {
    selectedPlace: null
  }

  handlerClickGeography = (placeCode) => {
    this.setState({selectedPlace: placeCode})
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
        </Layout>
        <ReactTooltip html={true} />
      </>
    )
  }
}

export default IndexPage
