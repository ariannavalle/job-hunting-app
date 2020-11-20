import React, { Component } from 'react'
import './Card.css'
import { Draggable } from 'react-beautiful-dnd'
import { MdLocationOn } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";

export default class card extends Component {

    render() {
        const { _id, title, company, location } = this.props.card;
        const { index } = this.props;
        return (
            <Draggable draggableId={_id} index={index}>
                {(provided, snapshot) => {
                    const style = {
                        backgroundColor: snapshot.isDragging ? '#E3EEE1' : 'white',
                        border: snapshot.isDragging ? '2px solid #fff' : 'none',
                        fontSize: 18,
                        ...provided.draggableProps.style,
                    };
                    return (<div
                        className="card-tile"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={style}
                    >
                        <div className="card-tile-header">{title}</div>
                        <div className="card-tile-subheader"><BsBuilding /> {company}</div>
                        <div className="card-tile-location">{location ? (<MdLocationOn style={{ color: "#f40810" }} />) : null} {location}</div>
                    </div>)
                }}
            </Draggable>
        )
    }
}

