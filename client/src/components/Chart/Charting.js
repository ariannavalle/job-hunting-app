import React, { Component } from 'react'
import Chart from './Chart'
import './Charting.css'

export default class Charting extends Component {
    render() {
        return (
            <div className="charting-container">
                <center><h1>Graphs and Stats</h1></center>
                <div className="charts">
                    <div className="chart-row">
                        <Chart className="chart"/>
                        <Chart className="chart"/>
                    </div>
                    <div className="chart-row">
                        <Chart className="chart"/>
                        <Chart className="chart"/>
                    </div>
                </div>
            </div>
        )
    }
}
