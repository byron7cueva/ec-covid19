import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { LineChartContainer } from './style'
import { colors } from '../../settings/charts'

export const LineChart = ({ data }) => (
  <LineChartContainer>
    <ResponsiveLine 
      data={data}
      margin={{ top: 10, right: 10, bottom: 70, left: 40}}
      enableGridX={false}
      useMesh={true}
      enableArea={false}
      curve={'monotoneX'}
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
          fontFamily: 'Saira, sans-serif',
          fontSize: 11,
          textColor:'#fff',
          grid: {
              line: {
                  stroke: '#fff'
              }
          },
          tooltip: {
              container: {
                  background: '#fff',
                  color: '#fff'
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
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: []
        }
      ]}
    />
  </LineChartContainer>
)
