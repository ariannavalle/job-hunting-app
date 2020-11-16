import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'

export default class Pie extends Component {
    render() {

        const { pieData } = this.props

        const styles = ["lines", "dots", "", ""]
        const sliceStyle = Object.values(pieData).map(data => {
            return {
                match: {
                    id: data.id
                },
                id: styles[Math.floor(Math.random() * Math.floor(styles.length))],
            }
        })

        return (
            <ResponsivePie
                data={pieData}
                margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
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
                fill={sliceStyle}
                legends={[]}
            />
        )
    }
}
