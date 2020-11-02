import React, { Component } from 'react'
import Card from '../Card/card'
import './column.css'

export default class column extends Component {

    render() {
        const { title, cards } = this.props.column;
        return (
            <div className="column">
                <div><b>{title}</b></div>
                <div>{cards.map(card => {
                    return (<div key={card._id}>
                        <Card card={card} />
                    </div>)
                })}</div>
            </div>
        )
    }
}

