import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { LineChartContainer } from './style'
import { LoadingPartial } from '../LoadingPatial'
import { colors, fonts } from '../../settings/constants'
import { NoData } from '../NoData'

export const LineChart = ({ data, loading }) => (
  <LineChartContainer>
    { loading ? <LoadingPartial /> : 
      data ? 
      <ResponsiveLine 
      data={data}
      margin={{ top: 10, right: 10, bottom: 60, left: 40}}
      enableGridX={false}
      useMesh={true}
      curve={'monotoneX'}
      enableSlices='x'
      colors={d => d.color}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day'
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: 'linear',
        stacked: false,
      }}
      axisLeft={{
        orient: 'left',
        legendOffset: 12
      }}
      axisBottom={{
        orient: 'bottom',
        format: '%b %d',
        tickValues: 'every 3 days',
        tickRotation: -30
      }}
      theme={
        {
          fontFamily: fonts.content.family,
          fontSize: 11,
          textColor:colors.light,
          grid: {
              line: {
                  stroke: colors.light
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
