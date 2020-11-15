import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'

export default class Pie extends Component {
    render() {
        const data = [
            {
                "id": "elixir",
                "label": "elixir",
                "value": 282,
                "color": "hsl(40, 70%, 50%)"
            },
            {
                "id": "c",
                "label": "c",
                "value": 216,
                "color": "hsl(40, 70%, 50%)"
            },
            {
                "id": "make",
                "label": "make",
                "value": 255,
                "color": "hsl(18, 70%, 50%)"
            },
            {
                "id": "go",
                "label": "go",
                "value": 312,
                "color": "hsl(159, 70%, 50%)"
            },
            {
                "id": "lisp",
                "label": "lisp",
                "value": 352,
                "color": "hsl(196, 70%, 50%)"
            }
        ]
        return (
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'category10' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="black"
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="black"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 64,
                        translateY: -82,
                        itemWidth: 110,
                        itemHeight: 20,
                        itemsSpacing: 0,
                        symbolSize: 18,
                        itemDirection: 'left-to-right'
                    }
                ]}
            />
        )
    }
}
