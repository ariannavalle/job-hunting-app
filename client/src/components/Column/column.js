import React, { Component } from 'react'
import Card from '../Card/card'
import './column.css'
import { Droppable } from 'react-beautiful-dnd'

export default class column extends Component {

    render() {
        const { _id, title, cards, index } = this.props.column;
        return (
            <div className="column">

                <div><b>{title}</b></div>

                <div>
                    <Droppable droppableId={_id} index={index}>
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <div key={card._id}>
                                            <Card card={card} index={index} />
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

