import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { LineChartContainer } from './style'
import { LoadingPartial } from '../LoadingPatial'
import { colors, fonts } from '../../settings/constants'
import { NoData } from '../NoData'

export const LineChart = ({ data, loading }) => {
  let tickValues = 0
  let lastDate
  if (data.length > 0) {
    const confirmed = data.find(item => item.id === 'Confirmados')
    const maxValue = confirmed.data[confirmed.data.length - 1].y
    lastDate = new Date(confirmed.data[confirmed.data.length - 1].x)
    tickValues = maxValue > 5 ? 5 : 1
  }

  return (
    <LineChartContainer>
      { loading ? <LoadingPartial /> : 
        data ? 
        <ResponsiveLine 
        data={data}
        margin={{ top: 20, right: 12, bottom: 80, left: 40}}
        enableGridX={false}
        useMesh={true}
        curve={'monotoneX'}
        enableSlices='x'
        colors={d => d.color}
        animate={true}
        pointSize={7}
        pointLabel={d => {
          if (d.x.getDate() === lastDate.getDate()) return d.y
          return null
        }}
        enablePointLabel={true}
        pointColor={colors.grayDark}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day'
        }}
        xFormat='time:%Y-%m-%d'
        yFormat=',d'
        yScale={{
          type: 'linear',
          stacked: false,
          max: 'auto',
          min: 'auto'
        }}
        axisLeft={{
          orient: 'left',
          legendOffset: 12,
          tickSize: 0,
          tickValues: tickValues
        }}
        axisBottom={{
          orient: 'bottom',
          format: '%-m/%-d',
          tickRotation: 0,
          tickValues: 5
        }}
        theme={
          {
            fontFamily: fonts.content.family,
            fontSize: 11,
            textColor:colors.light,
            grid: {
                line: {
                    stroke: colors.gray
                }
            },
            tooltip: {
                container: {
                    background: colors.dark,
                    color: colors.light
                }
            }
          }
        }
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 60,
            itemsSpacing: 10,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 20,
            itemTextColor: colors.light,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: []
          }
        ]}
      /> : <NoData description='No hay casos confirmados' />
      }
    </LineChartContainer>
  )
}
