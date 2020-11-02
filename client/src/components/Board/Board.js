import React from 'react'
import Card from '../Card/card'

export default function Board({ currentUser, cards, columns }) {
    return (
        <>
            <h1>{`${currentUser.name}'s`} Job Application Tracking Board</h1>

            <div>
                {columns.map(column => {
                    return (
                        <div key={column._id}>
                            <div><b>{column.title}</b></div>
                            <div>{column.cards.map(card => {
                                return (<div key={card._id}>
                                    <Card card={card} />
                                </div>)
                            })}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
