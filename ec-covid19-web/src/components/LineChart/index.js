import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { LineChartContainer } from './style'
import { colors, fonts } from '../../settings/constants'

export const LineChart = ({ data }) => (
  <LineChartContainer>
    <ResponsiveLine 
      data={data}
      margin={{ top: 10, right: 10, bottom: 47, left: 40}}
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
        tickValues: 'every 1 days'
      }}
      theme={
        {
          fontFamily: fonts.content.family,
          fontSize: 14,
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
          translateY: 50,
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
    />
  </LineChartContainer>
)
