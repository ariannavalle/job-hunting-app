import React, { Component } from 'react'
import './Card.css'
import { Draggable } from 'react-beautiful-dnd'
import { MdLocationOn } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";

export default class card extends Component {

    render() {
        const { _id, title, company, location, date, note } = this.props.card;
        const { index } = this.props;
        return (
            <Draggable draggableId={_id} index={index}>
                {(provided, snapshot) => {
                    const style = {
                        backgroundColor: snapshot.isDragging ? '#bad2f7' : 'white',
                        fontSize: 18,
                        ...provided.draggableProps.style,
                    };
                    return (<div
                        className="card"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={style}
                    >
                        <div className="card-header">{title}</div>
                        <div className="card-subheader"><BsBuilding /> {company}</div>
                        <div className="card-subheader">{location ? (<MdLocationOn style={{ color: "#f40810" }} />) : null} {location}</div>
                        {/*<div>Date Applied: {date}</div>
                        <div>Notes: {note}</div> */}

                    </div>)
                }}
            </Draggable>
        )
    }
}

