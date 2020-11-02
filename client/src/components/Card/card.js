import React, { Component } from 'react'
import './card.css'

export default class card extends Component {

    render() {
        const { title, company, location, date, note } = this.props.card;
        return (
            <div className="card">
                <div>Title: {title}</div>
                <div>Company: {company}</div>
                <div>Location: {location}</div>
                <div>Date Applied: {date}</div>
                <div>Notes: {note}</div>
                <br />
            </div>
        )
    }
}

