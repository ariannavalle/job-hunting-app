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

    componentDidMount = () => {

    }

    render() {
        return (
            <div className="sidebar">
                <div class="area"></div>
                <nav class="main-menu">
                    <ul>
                        <li>
                            <a href="#">
                                <MdAddCircleOutline class="menu-icon menu-add" />
                                <span class="nav-text">Add new job</span>
                            </a>
                        </li>

                        <li class="has-subnav">
                            <a href="#">
                                <FaListUl class="menu-icon" />
                                <span class="nav-text">Add new list</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <GoGraph class="menu-icon" />
                                <span class="nav-text">Graphs and Statistics</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <FaMapMarkedAlt class="menu-icon" />
                                <span class="nav-text">Maps</span>
                            </a>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li onClick={this.logoutAndLiftUserState}>
                            <a>
                                <FaPowerOff class="menu-icon" />
                                <span class="nav-text">Logout</span>
                            </a>
                        </li>
                    </ul>

                </nav>
                <nav class="mobile">
                    <MdAddCircleOutline class="menu-icon menu-add" />
                    <FaListUl class="menu-icon" />
                    <GoGraph class="menu-icon" />
                    <FaMapMarkedAlt class="menu-icon" />
                    <FaPowerOff class="menu-icon" onClick={this.logoutAndLiftUserState}/>
                </nav>
            </div >
        )
    }
}
