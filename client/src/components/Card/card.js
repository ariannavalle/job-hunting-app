import React, { Component } from 'react'
import './card.css'
import { Draggable } from 'react-beautiful-dnd'
import { MdLocationOn } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";


export default class card extends Component {

    render() {
        const { _id, title, company, location, date, note } = this.props.card;
        const { index } = this.props;
        return (
            <Draggable draggableId={_id} index={index}>
                {(provided) => (
                    <div
                        className="card"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                    >
                        <div className="card-header">{title}</div>
                        <div className="card-subheader"><BsBuilding /> {company}</div>
                        <div className="card-subheader"><MdLocationOn style={{ color: "#f40810" }} /> {location}</div>
                        {/*<div>Date Applied: {date}</div>
                        <div>Notes: {note}</div> */}

                    </div>
                )}
            </Draggable>
        )
    }
}

