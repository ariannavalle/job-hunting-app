import React, { Component } from 'react'
import Card from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd'
import { FaRegTrashAlt } from "react-icons/fa";
import { BiEdit, BiSave } from "react-icons/bi";
import './Column.css'

export default class column extends Component {

    state = {
        isEditEnabled: false,
        title: this.props.column.title
    }

    toggleEdit = () => {
        this.setState({
            isEditEnabled: !this.state.isEditEnabled,
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { _id, title, cards } = this.props.column;
        const { index, toggleDetailsModal, setCurrentCard, editColumn, deleteColumn, displayNotification } = this.props;

        return (
            <div className="column">
                {this.state.isEditEnabled ?

                    <form onSubmit={this.handleSubmit}
                    >
                        <div className="column-header">
                            <input type="text" name="title" id="title" required 
                            value={this.state.title} 
                            onChange={this.handleChange} />
                            <BiSave type="submit" onClick={() => {editColumn(_id, this.state.title); this.toggleEdit(); displayNotification()}} />
                        </div>
                    </form>

                    : <div className="column-header">
                        <div>{title} ({cards.length})</div>
                        <div>
                            <BiEdit className="h-icon" onClick={this.toggleEdit} />
                            <FaRegTrashAlt onClick={() => { deleteColumn(_id); displayNotification() }} />
                        </div>
                    </div>
                }
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

