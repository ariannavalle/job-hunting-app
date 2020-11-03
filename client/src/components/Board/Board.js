import React, { Component } from 'react'
import Column from '../Column/column'
import { DragDropContext } from 'react-beautiful-dnd'

export default class Board extends Component {

    onDragEnd = result => {

    }
    render() {
        const { currentUser, columns } = this.props;
        return (
            <div>
                <h1>{`${currentUser.name}'s`} Job Application Tracking Board</h1>

                <DragDropContext
                    // onDragStart
                    // onDragUpdate
                    onDragEnd={this.onDragEnd}
                >
                    <div>
                        {columns.map((column, index) => {
                            return (
                                <div key={column._id}>
                                    <Column column={column} index={index} />
                                </div>
                            )
                        })}
                    </div>
                </DragDropContext>
            </div>
        )
    }
}
