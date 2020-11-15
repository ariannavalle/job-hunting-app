import React, { Component } from 'react'
import { ResponsiveLine } from '@nivo/line'

export default class Chart extends Component {
    render() {
        const data = [
            {
                "id": "jobsPerCategory",
                "color": "hsl(334, 70%, 50%)",
                "data": [
                    {
                        "x": "Applied",
                        "y": 0
                    },
                    {
                        "x": "Interviwing",
                        "y": 3
                    },
                    {
                        "x": "Hired",
                        "y": 6
                    },
                    {
                        "x": "Rejected",
                        "y": 1
                    },
                    {
                        "x": "Ghosted",
                        "y": 5
                    }
                ]
            }   
        ]

        return (
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Application Status',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Number of Applications',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enableGridX={false}
                enableGridY={false}
                colors={"#9970ab"}
                lineWidth={6}
                pointSize={10}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                useMesh={true}
                legends={[]}
            />
        )
    }
}
