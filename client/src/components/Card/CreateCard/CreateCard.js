import React from 'react'
import CARD_SERVICE from "../../../services/CardService"
import { MdWork, MdLocationOn, MdWeb } from "react-icons/md";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './CreateCard.css'

export default class CreateCard extends React.Component {

    state = {
        title: '',
        company: '',
        date: '',
        note: '',
        location: '',
        postingURL: '',
        modalIsOpen: false,
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, company, date, note, location, postingURL } = this.state;

        // create card in db
        CARD_SERVICE.createCard({ title, company, date, note, location, postingURL })
            .then((serverResponse) => {
                const { card, successMessage } = serverResponse.data;

                // set the state
                this.props.updateCardState(card, successMessage);

                // insert newly created card in first column
                const { columns } = this.props;
                columns[Object.keys(columns)[0]].cards.push(card)

                // update column in db and state
                this.props.replaceColumns(columns[Object.keys(columns)[0]], columns[Object.keys(columns)[0]])

                this.props.toggleCreateModal()

                // clear form after submission
                this.setState({
                    title: '',
                    company: '',
                    date: '',
                    note: '',
                    location: '',
                    postingURL: '',
                })

                this.props.displayNotification()
            })
    }

    render() {
        const { title, company, date, note, location, postingURL, message } = this.state;
        return (
            <div>

                <Modal centered isOpen={this.props.displayCreateModal}>
                    <ModalHeader toggle={this.props.toggleCreateModal}>Add New Job</ModalHeader>
                    <ModalBody>
                        <div className="modal-form">

                            <form onSubmit={this.handleSubmit} className="register-form" id="login-form">

                                <div className="form-group">
                                    <label htmlFor="title" className="icon"><MdWork /></label>
                                    <input type="text" name="title" id="title" placeholder="Job Title *" required value={title}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company" className="icon"><BsBuilding /></label>
                                    <input type="text" name="company" id="company" placeholder="Company Name *" required value={company}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group" style={{ display: "flex", justifyContent: "space-between", borderBottom:"1px solid #999" }}>
                                    <div className="icon" style={{display:"flex", }}><BsCalendar style={{marginBottom:"0"}}/>
                                        <div style={{padding: "0 15px",color:"#999"}}>Date Applied  </div></div>
                                    <input style={{ border:"0", padding: "0", width: "40%" }} type="date" name="date" id="date" value={date}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location" className="icon"><MdLocationOn /></label>
                                    <input type="text" name="location" id="location" placeholder="Location" value={location}
                                        onChange={this.handleChange} />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="postingURL" className="icon"><MdWeb /></label>
                                    <input type="text" name="postingURL" id="postingURL" placeholder="URL to job posting" value={postingURL}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group" style={{ marginBottom: "0" }}>
                                    <textarea rows="4" cols="51" name="note" id="note" placeholder="Include any notes here..." value={note}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="create" id="create" className="form-submit-btn" value="Create" />
                                </div>
                            </form>

                            {/* error message */}
                            {message && <div style={{ color: "red", paddingTop: "1rem" }}> {message} </div>}

                        </div>
                    </ModalBody>
                </Modal>

            </div>

        )
    }
}