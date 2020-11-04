import React, { Component } from "react";
import "./card.css";
import { Draggable } from "react-beautiful-dnd";

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
            <div>Title: {title}</div>
            <div>Company: {company}</div>
            <div>Location: {location}</div>
            <div>Date Applied: {date}</div>
            <div>Notes: {note}</div>
            <br />
          </div>
        )}
      </Draggable>
    );
  }
}
