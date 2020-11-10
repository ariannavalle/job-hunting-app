import React, { Component } from 'react'
import Card from '../Card/Card'
import './Column.css'
import { Droppable } from 'react-beautiful-dnd'

export default class column extends Component {

    getBackgroundColor = (snapshot) => {
        // The destination column turns blue when a card is being dragged
        if (snapshot.isDraggingOver) {
            return '#deebff';
        }

        // The home column turns yellow when a card is being dragged
        if (snapshot.draggingFromThisWith) {
            return '#fffbde';
        }

        // Otherwise use our default background
        return 'inherit';
    };

    render() {
        const { _id, title, cards } = this.props.column;
        const { index, toggleDetailsModal, setCurrentCard } = this.props;

        return (
            <div className="column">

                <div className={`column-header c-h-${index}`}>
                    <div>{title}</div>
                    <div>{cards.length}</div>
                </div>

                <div>
                    <Droppable droppableId={_id} index={index}>
                        {(provided, snapshot) => (
                            <div className="droppable-height"
                                ref={provided.innerRef}
                                // style={{ backgroundColor: snapshot.isDraggingOver ? '#deebff' : 'inherit', minHeight:"100vh" }}
                                style={{ backgroundColor: this.getBackgroundColor(snapshot) }}
                                {...provided.droppableProps}
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <div key={card._id} onClick={() => {toggleDetailsModal();setCurrentCard(card)}}>
                                            <Card card={card} index={index} column={_id} />
                                        </div>
                                    )
                                })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>



            </div>
        )
    }
}

