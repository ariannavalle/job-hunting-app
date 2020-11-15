import React, { Component } from 'react'
import { ResponsivePie } from '@nivo/pie'

export default class Pie extends Component {
    render() {
        const data = Object.values(this.props.columns).map((column) => {
            return {
                "id": column.title,
                "label": column.title,
                "value": column.cards.length,
            }
        })

        const styles = ["lines", "dots", "", ""]
        const sliceStyle = Object.values(data).map(data => {
            return {
                match: {
                    id: data.id
                },
                id: styles[Math.floor(Math.random() * Math.floor(styles.length))],
            }
        })
        
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
                fill={sliceStyle}
                legends={[]}
            />
        )
    }
}
