import React from 'react'

export default function Board({currentUser, cards, columns}) {
    return (
        <>
            <div>
                This is {`${currentUser.name}'s`} board
            </div>
            <h1>Job Application Tracker</h1>
            <div>
                {columns.map(column => {
                    return (
                        <div key={column._id}>
                             <hr/>
                            <div><b>{column.title}</b></div>
                            <div>{column.cards.map(card => {
                                return (<div key={card._id}>
                                    <div>Title: {card.title}</div>
                                    <div>Company: {card.company}</div>
                                    <div>Location: {card.location}</div>
                                    <div>Date Applied: {card.date}</div>
                                    <div>Notes: {card.note}</div>
                                    <br/>
                                </div>)
                            })}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
