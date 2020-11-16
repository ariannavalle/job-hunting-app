import React, { Component } from 'react'
import { ResponsiveLine } from '@nivo/line'

export default class Chart extends Component {
    render() {

        const { lineData } = this.props

        return (
            <ResponsiveLine
                data={lineData}
                margin={{ top: 10, right: 50, bottom: 130, left: 50 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2~f"
                curve="linear"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: 'Date',
                    legendOffset: 56,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 6,
                    tickRotation: 0,
                    legend: 'Number of Jobs',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                enableGridY={false}
                colors={{ scheme: 'category10' }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                areaBaselineValue={1}
                useMesh={true}
                legends={[]}
            />
        )
    }
}
