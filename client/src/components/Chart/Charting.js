import React, { Component } from 'react'
import Line from './Line'
import Pie from './Pie'
import Calendar from './Calendar'
import './Charting.css'

export default class Charting extends Component {
    render() {

        // calendar data
        const dateOccurrence = Object.values(this.props.cards).reduce(function (acc, curr) {
            acc[curr.date] = (acc[curr.date] || 0) + 1;
            return acc
        }, {});

        const formattedData = Object.entries(dateOccurrence).map(entry => {
            return {
                day: entry[0].slice(0, 10).toString(),
                value: entry[1].toString()
            }
        })

        // pie data

        return (
            <div className="charting-container">
                <center><h2>Graphs and Stats</h2></center>
                <div className="charts">
                    <div className="chart-row">
                        <div className="chart">
                            <h3><b>Number of Jobs Per Category</b></h3>
                            <Pie columns={this.props.columns} /></div>
                        <div className="chart">
                            <h3><b>Jobs Applied by Date</b></h3>
                            <Calendar calendarData={formattedData} /></div>
                    </div>
                    <div className="chart-row">
                        <div className="chart">
                            <h3><b>TBD...</b></h3>
                            <Line cards={this.props.cards} />
                        </div>
                        <div className="chart">
                            <h3><b>TBD...</b></h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
