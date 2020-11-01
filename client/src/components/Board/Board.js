import React from 'react'

export default function Board({currentUser, cards}) {
    return (
        <div>
            This is {`${currentUser.name}'s`} board
        </div>
    )
}
