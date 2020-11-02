import React from 'react'
import Column from '../Column/column'

export default function Board({ currentUser, cards, columns }) {
    return (
        <>
            <h1>{`${currentUser.name}'s`} Job Application Tracking Board</h1>

            <div>
                {columns.map(column => {
                    return (
                        <div key={column._id}>
                            <Column column={column} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
