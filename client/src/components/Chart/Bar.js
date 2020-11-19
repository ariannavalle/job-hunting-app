import React, { Component } from 'react'
import { ResponsiveBar } from '@nivo/bar'

export default class Bar extends Component {
    render() {
        const { barData } = this.props;
        return (
            <ResponsiveBar
                data={barData}
                keys={['key']}
                indexBy="salary"
                margin={{ top: -30, right: 100, bottom: 125, left: 130 }}
                padding={0.3}
                layout="horizontal"
                valueScale={{ type: 'linear' }}
                colors={{ scheme: 'category10' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: "#63a0cb",
                        size: 4,
                        padding: 9,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: "#63a0cb",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 16
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'none'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'key'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Salary',
                    legendPosition: 'middle',
                    legendOffset: 50
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Company',
                    legendPosition: 'middle',
                    legendOffset: -100
                }}
                enableGridX={true}
                enableGridY={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#ffffff"
                legends={[]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        )
    }
}
