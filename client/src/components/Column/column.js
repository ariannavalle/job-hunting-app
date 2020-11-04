import React, { Component } from 'react'
import Card from '../Card/card'
import './column.css'
import { Droppable } from 'react-beautiful-dnd'

export default class column extends Component {

    render() {
        const { _id, title, cards } = this.props.column;
        const {index } = this.props;

        return (
            <div className="column">

                <div className={`column-header c-h-${index}`}>
                    <div>{title}</div>
                    <div>{cards.length}</div>
                </div>

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

