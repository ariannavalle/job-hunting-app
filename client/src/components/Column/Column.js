import React, { Component } from 'react'
import Card from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd'
import { FaRegTrashAlt } from "react-icons/fa";
import './Column.css'

export default class column extends Component {

    render() {
        const { _id, title, cards } = this.props.column;
        const { index, toggleDetailsModal, setCurrentCard, deleteColumn, displayNotification } = this.props;

        return (
            <div className="column">

                <div className={`column-header c-h-${index}`}>
                    <div>{title} ({cards.length})</div>
                    <FaRegTrashAlt onClick={() => { deleteColumn(_id); displayNotification() }} />
                </div>

                <div>
                    <Droppable droppableId={_id} index={index}>
                        {(provided, snapshot) => (
                            <div className="droppable-height"
                                ref={provided.innerRef}
                                style={{ backgroundColor: snapshot.isDraggingOver ? '#E3EEE1' : 'inherit' }}
                                {...provided.droppableProps}
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <div key={card._id} onClick={() => { toggleDetailsModal(); setCurrentCard(card) }}>
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

