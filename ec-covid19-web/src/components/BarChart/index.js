import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { ChartContainer } from '../ChartContainer'
import { LoadingPartial } from '../LoadingPatial'
import { NoData } from '../NoData'
import { colors as colorsApp } from '../../settings/constants'
import { theme, colors, legends } from '../../settings/charts'

export const BarChart = ({ data, loading, title, height }) => (
  <ChartContainer height={height}>
     { loading ? <LoadingPartial /> : 
        data ? 
        <>
          <h4>{title}</h4>
          <ResponsiveBar
            data={data}
            theme={theme}
            legends={legends}
            animate={false}
            margin={{ top: 20, right: 10, bottom: 75, left: 150 }}
            keys={[ 'totalconfirmed', 'totaldead', 'totalhealed' ]}
            indexBy='placeName'
            layout='horizontal'
            labelTextColor={colorsApp.light}
            colors={[colors.confirmed, colors.dead]}
            axisTop={null}
            axisRight={null}
            enableGridY={false}
            axisBottom={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5
            }}
          />
        </>
        : <NoData description='No hay casos confirmados' />
    }
  </ChartContainer>
)