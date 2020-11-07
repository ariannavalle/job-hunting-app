import React from 'react'
import CARD_SERVICE from "../../services/CardService"
import COLUMN_SERVICE from "../../services/ColumnService"
import { MdAdd, MdWork, MdLocationOn, MdWeb } from "react-icons/md";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import { BiNote } from "react-icons/bi";
import './CreateCard.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateCard extends React.Component {
    state = {
        title: '',
        company: '',
        date: '',
        note: '',
        location: '',
        postingURL: '',
        message: null,
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
                const { card } = serverResponse.data;

                // set the state
                this.props.updateCardState(card);

                // insert newly created card in first column
                const { columns } = this.props;
                columns[Object.keys(columns)[0]].cards.push(card)

                // update column in db and state

                // this is creating a dupe
                // this.props.updateColumnState(columns[Object.keys(columns)[0]])

                this.props.replaceColumns(columns[Object.keys(columns)[0]], columns[Object.keys(columns)[0]])

                this.toggleModal()
                
                // clear form after submission
                this.setState({
                    title: '',
                    company: '',
                    date: '',
                    note: '',
                    location: '',
                    postingURL: '',
                })

            })
            .catch(err => {
                if (err.response && err.response.data) {
                    return this.setState({ message: err.response.data.message });
                }
            });
    }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() {
        const { title, company, date, note, location, postingURL } = this.state;
        return (
            <div>
                <div className="add-btn" onClick={this.toggleModal}><MdAdd /></div>


                <Modal centered isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal}><h2>Add New Job</h2></ModalHeader>
                    <ModalBody>
                        <div className="modal-form">

                            <form onSubmit={this.handleSubmit} className="register-form" id="login-form">

                                <div className="form-group">
                                    <label htmlFor="title" className="icon"><MdWork /></label>
                                    <input type="text" name="title" id="title" placeholder="Job Title *" required value={this.state.title}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company" className="icon"><BsBuilding /></label>
                                    <input type="text" name="company" id="company" placeholder="Company Name *" required value={this.state.company}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location" className="icon"><MdLocationOn /></label>
                                    <input type="text" name="location" id="location" placeholder="Location" value={this.state.location}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date" className="icon"><BsCalendar /></label>
                                    <input type="text" name="date" id="date" placeholder="Date Applied" value={this.state.date}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="postingURL" className="icon"><MdWeb /></label>
                                    <input type="text" name="postingURL" id="postingURL" placeholder="URL to job posting" value={this.state.postingURL}
                                        onChange={this.handleChange} />
                                </div>

                                <div className="form-group" style={{marginBottom:"0"}}>
                                    <textarea rows="4" cols="51" name="note" id="note" placeholder="Include any notes here..." value={this.state.note}
                                        onChange={this.handleChange} />
                                </div>

                                
                                <div className="form-group form-button">
                                    <input type="submit" name="create" id="create" className="form-submit-btn" value="Create" />
                                </div>
                            </form>

                            {/* error message */}
                            {this.state.message && <div style={{ color: "red", paddingTop: "1rem" }}> {this.state.message} </div>}

                        </div>
                    </ModalBody>
                </Modal>

            </div>

        )
    }
}