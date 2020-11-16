import React, { Component } from 'react'
import { ResponsiveLine } from '@nivo/line'
import column from '../Column/Column';

export default class Chart extends Component {
    render() {
        console.log(Object.values(this.props.columns))
        const test = Object.values(this.props.columns).filter(column => column.title === "Applied" || column.title === "applied")[0].cards

        // const test = Object.values(this.props.columns).map(column => column.cards)
        
        const test2= test.reduce(function(acc,curr){
            acc[curr.date] = (acc[curr.date] || 0) + 1;
            return acc
         },{});

         const test3 = Object.entries(test2).map(entry => {
             return {
                 x: entry[0].slice(0,10).toString(),
                 y: entry[1].toString()
             }
         })
         
        console.log('1',test)
        console.log('2',test2)
        console.log([{"data": test3}])
        

        return (
            <ResponsiveLine
                data={[{"data": test3}]}
                margin={{ top: 15, right: 50, bottom: 120, left: 50 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2~f"
                curve="natural"
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
                useMesh={true}
                legends={[]}
            />
        )
    }
}
