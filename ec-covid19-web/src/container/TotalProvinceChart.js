import React, { Component } from 'react'
import { request } from 'graphql-request'

import { BarChart } from '../components/BarChart'

export class TotalProvinceChart extends Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount () {
    const query = `
      query {
        getAllTotalLastCasesByProvinces{
          placeCode
          placeName
          placeTypeId
          totalconfirmed
          totaldead
          totalhealed
        }
      }
    `
    
    request('/api', query)
    .then(data => {
      this.setState({data: data.getAllTotalLastCasesByProvinces, loading: false})
    })
    .catch(error => {
      this.setState({data: [], loading: false})
    })
  }

  render () {
    return (
      <BarChart data={this.state.data} loading={this.state.loading} title='Total de casos por provincia' height='40em'/>
    )
  }
}
