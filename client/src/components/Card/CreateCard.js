import React from 'react'
import CARD_SERVICE from "../../services/CardService"
import { MdAdd, MdWork, MdLocationOn, MdWeb } from "react-icons/md";
import { BsBuilding, BsCalendar } from "react-icons/bs";
import {BiNote} from "react-icons/bi";
import './CreateCard.css'

export default class CreateCard extends React.Component {
    state = {
        title: '',
        company: '',
        date: '',
        note: '',
        location: '',
        postingURL: '',
        message: null,
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]:value})
    }

    renderForm = () => {
        const { title, company, date, note, location, postingURL } = this.state;
        return (
            <div>

            </div>
        )
    }

    render() {
        const { title, company, date, note, location, postingURL } = this.state;
        return (
            <div>
                <div className="add-btn" onClick={this.renderForm}><MdAdd /></div>

                <div className="global-form">
                <h2 className="form-title">Add New Job</h2>
                <form onSubmit={this.handleFormSubmission} className="register-form" id="login-form">

                    <div className="form-group">
                        <label htmlFor="title" className="icon"><MdWork /></label>
                        <input type="text" name="title" id="title" placeholder="Job Title *" value={this.state.title}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="company" className="icon"><BsBuilding /></label>
                        <input type="text" name="company" id="company" placeholder="Company Name" value={this.state.company}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location" className="icon"><MdLocationOn /></label>
                        <input type="text" name="location" id="location" placeholder="Location" value={this.state.location}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date" className="icon"><BsCalendar /></label>
                        <input type="text" name="date" id="date" placeholder="Date Applied" value={this.state.date}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note" className="icon"><BiNote /></label>
                        <input type="text" name="note" id="note" placeholder="Notes" value={this.state.note}
                            onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postingURL" className="icon"><MdWeb /></label>
                        <input type="text" name="postingURL" id="postingURL" placeholder="URL to job posting" value={this.state.postingURL}
                            onChange={this.handleInputChange} />
                    </div>


                    <div className="form-group form-button">
                        <input type="submit" name="create" id="create" className="form-submit-btn" value="Create" />
                    </div>
                </form>

                {/* error message */}
                {this.state.message && <div style={{ color: "red", paddingTop: "1rem" }}> {this.state.message} </div>}

            </div>

            </div>

        )
    }
}