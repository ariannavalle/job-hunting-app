import React, { Component } from 'react'
import Line from './Line'
import Pie from './Pie'
import './Charting.css'

export default class Charting extends Component {
    render() {
        return (
            <div className="charting-container">
                <center><h2>Graphs and Stats</h2></center>
                <div className="charts">
                    <div className="chart-row">
                        <div className="chart">
                            <h3><b>Jobs Applied - Last 7 Days</b></h3>
                            <Line /></div>
                        <div className="chart">
                            <h3><b>Number of Jobs Per Category</b></h3>
                            <Pie columns={this.props.columns} /></div>
                    </div>
                    <div className="chart-row">
                        <div className="chart">
                            <h3><b>Jobs Applied - Last 7 Days</b></h3>
                            <Line /></div>
                        <div className="chart">
                            <h3><b>Jobs Applied - Last 7 Days</b></h3>
                            <Line /></div>
                    </div>
                </div>
            </div>
        )
    }
}
