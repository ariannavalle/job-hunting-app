import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                                <span className="nav-text"><Link to="/charting">Graphs and Statistics</Link></span>
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
                    <Link to="/charting"><GoGraph className="menu-icon"  /></Link>
                    <FaPowerOff className="menu-icon" onClick={this.logoutAndLiftUserState} />
                </nav>
            </div >
        )
    }
}
