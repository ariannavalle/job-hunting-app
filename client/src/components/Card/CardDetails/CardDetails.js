import React from 'react'
import { MdLocationOn, MdWeb } from "react-icons/md";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { BiNote } from "react-icons/bi";
import './CardDetails.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class CardDetails extends React.Component {

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { title, company, date, note, location, postingURL } = this.state;

    //     // create card in db
    //     CARD_SERVICE.createCard({ title, company, date, note, location, postingURL })
    //         .then((serverResponse) => {
    //             const { card } = serverResponse.data;

    //             // set the state
    //             this.props.updateCardState(card);

    //             // insert newly created card in first column
    //             const { columns } = this.props;
    //             columns[Object.keys(columns)[0]].cards.push(card)

    //             // update column in db and state

    //             // this is creating a dupe
    //             // this.props.updateColumnState(columns[Object.keys(columns)[0]])

    //             this.props.replaceColumns(columns[Object.keys(columns)[0]], columns[Object.keys(columns)[0]])

    //             this.toggleModal()

    //             // clear form after submission
    //             this.setState({
    //                 title: '',
    //                 company: '',
    //                 date: '',
    //                 note: '',
    //                 location: '',
    //                 postingURL: '',
    //             })

    //         })
    //         .catch(err => {
    //             if (err.response && err.response.data) {
    //                 return this.setState({ message: err.response.data.message });
    //             }
    //         });
    // }

    render() {
        const { _id, title, company, location, date, note, postingURL } = this.props.card;
        const { toggleDetailsModal, toggleEditModal, deleteCard, displayDetailsModal, displayEditModal, displayNotification } = this.props;
        return (
            <>
                {displayDetailsModal &&
                    (<Modal size="lg" centered isOpen={displayDetailsModal} toggle={() => toggleDetailsModal({})}>
                        <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>{title}</ModalHeader>

                        <ModalBody className="details-container">

                            <div className="details-header"><BsBuilding className="details-icon" /> Company</div>
                            <div className="details">{company}</div>

                            <div className="details-header"><MdLocationOn className="details-icon" /> Location</div>
                            <div className="details">{location}</div>

                            <div className="details-header"><BsCalendar className="details-icon" /> Date Applied</div>
                            <div className="details">{date}</div>

                            <div className="details-header"><MdWeb className="details-icon" /> URL to Job Posting</div>
                            <div className="details">{postingURL}</div>

                            <div className="details-header"><BiNote className="details-icon" /> Notes</div>
                            <div className="details">{note}</div>

                            <Button color="danger" className="float-right"
                                onClick={() => { deleteCard(_id); toggleDetailsModal({}); displayNotification() }}>Delete</Button>
                            <Button color="light" className="float-right edit-btn"
                                onClick={() => { toggleDetailsModal({}); toggleEditModal() }}
                            >Edit</Button>

                        </ModalBody>
                    </Modal>)}

                { displayEditModal && (

                    <Modal size="lg" centered isOpen={displayEditModal} toggle={() => toggleEditModal({})}>
                        <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>{title} (EDIT)</ModalHeader>
                        <ModalBody className="details-container">

                            <div className="details-header">
                                <BsBuilding className="details-icon" /> Job Title
                            </div>
                            <div className="edit-input">
                                <input type="text" name="title" id="title" placeholder={title} required value={title} onChange={this.handleChange} />
                            </div>

                            <div className="details-header">
                                <BsBuilding className="details-icon" /> Company
                            </div>
                            <div className="edit-input">
                                <input type="text" name="company" id="company" placeholder={company} required value={company} onChange={this.handleChange} />
                            </div>

                            <div className="details-header">
                                <MdLocationOn className="details-icon" /> Location
                            </div>
                            <div className="edit-input">
                                <input type="text" name="location" id="location" placeholder={location} value={location} onChange={this.handleChange} />
                            </div>

                            <div className="details-header">
                                <BsCalendar className="details-icon" /> Date Applied
                            </div>
                            <div className="edit-input">
                                <input type="text" name="date" id="date" placeholder={date} value={date} onChange={this.handleChange} />
                            </div>

                            <div className="details-header">
                                <MdWeb className="details-icon" /> URL to Job Posting
                            </div>
                            <div className="edit-input">
                                <input type="text" name="postingURL" id="postingURL" placeholder={postingURL} value={postingURL} onChange={this.handleChange} />
                            </div>

                            <div className="details-header">
                                <BiNote className="details-icon" /> Notes
                            </div>
                            <div className="edit-input">
                                <textarea rows="5" cols="51" name="note" id="note" style={{ marginTop: ".5rem", marginBottom: "1.5rem", width:"100%" }} placeholder={note} value={note} onChange={this.handleChange} />
                            </div>

                            <Button color="light" className="float-right edit-btn"
                                onClick={() => { toggleEditModal(); displayNotification() }}>Save</Button>
                        </ModalBody>
                    </Modal>
                )}
            </>
        )
    }
} 