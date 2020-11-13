import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/AuthService';
import { MdAddCircleOutline } from "react-icons/md";
import { FaListUl, FaMapMarkedAlt, FaPowerOff } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import './Sidebar.css'

export default class Sidebar extends Component {

    logoutAndLiftUserState = () => {
        AUTH_SERVICE.logout()
            .then(() => this.props.onUserChange(null))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="sidebar">
                <div className="area"></div>
                <nav className="main-menu">
                    <ul>
                        <li onClick={this.props.toggleCreateModal}>
                            <span>
                                <MdAddCircleOutline className="menu-icon menu-add" />
                                <span className="nav-text">Add new job</span>
                            </span>
                        </li>

                        <li onClick={this.props.toggleColumnModal}>
                            <span>
                                <FaListUl className="menu-icon" />
                                <span className="nav-text">Add new list</span>
                            </span>
                        </li>

                        <li>
                            <span>
                                <GoGraph className="menu-icon" />
                                <span className="nav-text">Graphs and Statistics</span>
                            </span>
                        </li>

                        <li>
                            <span>
                                <FaMapMarkedAlt className="menu-icon" />
                                <span className="nav-text">Maps</span>
                            </span>
                        </li>
                    </ul>

                    <ul className="logout">
                        <li onClick={this.logoutAndLiftUserState}>
                            <span>
                                <FaPowerOff className="menu-icon" />
                                <span className="nav-text">Logout</span>
                            </span>
                        </li>
                    </ul>

                </nav>
                <nav className="mobile">
                    <MdAddCircleOutline className="menu-icon menu-add" onClick={this.props.toggleCreateModal} />
                    <FaListUl className="menu-icon" onClick={this.props.toggleColumnModal} />
                    <GoGraph className="menu-icon" />
                    <FaMapMarkedAlt className="menu-icon" />
                    <FaPowerOff className="menu-icon" onClick={this.logoutAndLiftUserState} />
                </nav>
            </div >
        )
    }
}
