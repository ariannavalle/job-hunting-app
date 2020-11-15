import React, { Component } from 'react'
import Line from './Line'
import './Charting.css'

export default class Charting extends Component {
    render() {
        return (
            <div className="charting-container">
                <center><h1>Graphs and Stats</h1></center>
                <div className="charts">
                    <div className="chart-row">
                        <Line className="chart"/>
                        <Line className="chart"/>
                    </div>
                    <div className="chart-row">
                        <Line className="chart"/>
                        <Line className="chart"/>
                    </div>
                </div>
            </div>
        )
    }
}
