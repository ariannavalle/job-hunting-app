import React from 'react'
import { MdLocationOn, MdWeb } from "react-icons/md";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { BiNote } from "react-icons/bi";
import './CardDetails.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class CardDetails extends React.Component {

    render() {
        const { _id, title, company, location, date, note, postingURL } = this.props.card;
        const { toggleModal, deleteCard, displayNotification } = this.props;
        return (
            <Modal centered isOpen={this.props.modalIsOpen} toggle={() => toggleModal({})}>
                <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>{title}</ModalHeader>
                <ModalBody className="details-container">

                    <div className="details-header"><BsBuilding className="details-icon" /> Company</div>
                    <div className="details">{company}</div>
                    <div className="details-header"><MdLocationOn className="details-icon" /> Location</div>
                    <div className="details">{location}</div>
                    <div className="details-header"><BsCalendar className="details-icon" /> Date Applied</div>
                    <div className="details">{date}</div>
                    <div className="details-header"><BiNote className="details-icon" /> Notes</div>
                    <div className="details">{note}</div>
                    <div className="details-header"><MdWeb className="details-icon" /> URL to Job Posting</div>
                    <div className="details">{postingURL}</div>
                    <Button color="danger" className="float-right" 
                    onClick={() => {deleteCard(_id);toggleModal({});displayNotification()}}>Delete</Button>
                    <Button color="light" className="float-right edit-btn" 
                    onClick={() => {deleteCard(_id);toggleModal({});displayNotification()}}>Edit</Button>
                </ModalBody>
            </Modal>
        )
    }
}