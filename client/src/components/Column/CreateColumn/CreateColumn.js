import React from 'react'
import COLUMN_SERVICE from "../../../services/ColumnService"
import { FaColumns } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './CreateColumn.css'

export default class CreateColumn extends React.Component {

    state = {
        title: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;

        COLUMN_SERVICE.createColumn({ title })
            .then((serverResponse) => {
                const { column, successMessage } = serverResponse.data;

                this.props.updateColumnState(column, successMessage);
                this.props.toggleColumnModal()

                // clear form after submission
                this.setState({
                    title: '',
                })

                this.props.displayNotification()

            })
            .catch(err => {
                if (err.response && err.response.data) {
                    return this.setState({ message: err.response.data.message });
                }
            });
    }

    render() {
        const { title } = this.state;
        return (
            <div>

                <Modal centered isOpen={this.props.displayColumnModal}>
                    <ModalHeader toggle={this.props.toggleColumnModal}>Add New List</ModalHeader>
                    <ModalBody>
                        <div className="modal-form">
                            <form onSubmit={this.handleSubmit} className="register-form" id="login-form">

                                <div className="details-header"><FaColumns className="details-icon" />List Title *</div>
                                <input type="text" name="title" id="title" required value={title} onChange={this.handleChange} />

                                <div className="form-group form-button">
                                    <input type="submit" name="create" id="create" className="form-submit-btn" value="Create" />
                                </div>

                            </form>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}