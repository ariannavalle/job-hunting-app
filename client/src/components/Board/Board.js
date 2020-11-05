import React, { Component } from 'react'
import Column from '../Column/column'
import { DragDropContext } from 'react-beautiful-dnd'
import './board.css'
import { MdAdd } from "react-icons/md";

export default class Board extends Component {


    // DragDropContext => board
    // Droppable => columns
    // Draggable => cards

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        const { columns, replaceColumns } = this.props;

        // card has not moved
        if (!destination) return;

        // card moved to the same position it was initially in
        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        /// reorder card ids in column
        // retrieve the source column
        const columnSrc = Object.values(columns).find(
            (col) => col._id === source.droppableId
        );
        let columnDst = Object.values(columns).find(
            (col) => col._id === destination.droppableId
        );

        const cardsSrc = [...columnSrc.cards];
        let cardsDst = [...columnDst.cards];

        if (source.droppableId === destination.droppableId) {
            cardsDst = cardsSrc;
        }
        const card = cardsSrc.find((crd) => crd._id === draggableId);

        cardsSrc.splice(source.index, 1);
        cardsDst.splice(destination.index, 0, card);

        replaceColumns(
            { ...columnSrc, cards: cardsSrc },
            { ...columnDst, cards: cardsDst }
        );
    };

    render() {
        const { currentUser, columns } = this.props;
        return (
            <div className="board-container">
                <h1>{`${currentUser.name}'s`} Job Application Tracking Board</h1>

                <div className="add-btn"><MdAdd /></div>

                <DragDropContext
                    // onDragStart
                    // onDragUpdate
                    onDragEnd={this.onDragEnd}
                >
                    <div className="board">
                        {Object.values(columns).map((column, index) => {
                            return (
                                <div key={column._id}>
                                    <Column column={column} index={index} />
                                </div>
                            );
                        })}
                    </div>
                </DragDropContext>
            </div>
        )
    }
}
