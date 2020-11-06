import React, { Component } from 'react'
import Column from '../Column/Column'
import CreateCard from '../Card/CreateCard'
import { DragDropContext } from 'react-beautiful-dnd'
import './Board.css'

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

    getJobsApplied = () => {
        const { columns } = this.props;
        let jobsInColumns = Object.values(columns)
        let totalJobs = jobsInColumns.reduce((accum, curr) => {
            return accum + curr.cards.length
        }, 0)
        let interestedJobs = columns[Object.keys(columns)[0]].cards.length
        return totalJobs - interestedJobs;
    }

    getMsg = () => {
        if (this.getJobsApplied() === 0) {
            return "jobs. What are you waiting for?"
        }
        else if (this.getJobsApplied() === 1) {
            return "job."
        }
        else {
            return "jobs. Keep it up!"
        }
    }

    render() {
        const { currentUser, columns } = this.props;


        return (
            <div className="board-container">
                <h2>Welcome, {`${currentUser.name}.`}</h2>
                <div style={{color:"#777"}}>You have applied to <b>{this.getJobsApplied()}</b> {this.getMsg()} </div>

                <CreateCard />

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
