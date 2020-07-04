import React from 'react'
import { ResponsiveLine } from '@nivo/line'

import { ChartContainer } from '../ChartContainer'
import { LoadingPartial } from '../LoadingPatial'
import { theme, legends } from '../../settings/charts'
import { NoData } from '../NoData'

export const LineChart = ({ data, loading, title, height }) => {
  let tickValues = 0
  let lastDate
  if (data.length > 0) {
    const confirmed = data.find(item => item.id === 'Confirmados')
    const maxValue = confirmed.data[confirmed.data.length - 1].y
    lastDate = new Date(confirmed.data[confirmed.data.length - 1].x)
    tickValues = maxValue > 5 ? 5 : 1
  }

  return (
    <ChartContainer height={height}>
      { loading ? <LoadingPartial /> : 
        data ? 
        <>
          <h4>{title}</h4>
          <ResponsiveLine 
          data={data}
          margin={{ top: 20, right: 12, bottom: 80, left: 40}}
          enableGridX={false}
          useMesh={true}
          curve={'monotoneX'}
          enableSlices='x'
          colors={d => d.color}
          animate={false}
          pointSize={5}
          pointLabel={d => {
            if (d.x.getDate() === lastDate.getDate()) return d.y
            return null
          }}
          enablePointLabel={true}
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
          theme={theme}
          legends={legends}
          sliceTooltip={({ slice }) => {
            return (
              <div
                style={{
                  background: '#010a43',
                  padding: '9px 12px'
                }}
              >
                <div>{slice.points[0].data.xFormatted}</div>
                {slice.points.map(point => (
                  <div
                    key={point.id}
                    style={{
                      color: point.serieColor,
                      padding: '3px 0'
                    }}
                  >
                    <strong>{point.serieId} [{point.data.yFormatted}] </strong>
                  </div>
                ))}
              </div>
            )
          }}
        />
       </>
       : <NoData description='No hay casos confirmados' />
      }
    </ChartContainer>
  )
}
