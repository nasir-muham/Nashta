import React from 'react';
import { Component } from 'react';
import { Nav, Navbar, Modal } from "react-bootstrap";
import {withRouter} from "react-router-dom";
import "./navbar.css"

class MainNavbar extends Component {
    render() {
        const onClickDashboard = () => {
            this.props.history.push("/dashboard");
        }
        
        const onClickAddEvent = () => {
            this.props.history.push("/AddEvent");
        }
        return (
        <Navbar className="navbar-custom">
            <Nav.Item className="nav ml auto">
            <Nav className="title-main-navbar">Navbar Brand</Nav>
            </Nav.Item>
            <Nav.Item className="nav ml-auto">
            <Nav.Link className="navbar-bantuan-button" onClick={onClickAddEvent}>
                + Add Event
            </Nav.Link>
            <Nav.Link className="navbar-logout-button" onClick={onClickDashboard}>
                Dashboard
            </Nav.Link>
            </Nav.Item>
        </Navbar>
        )
    }
}
export default withRouter(MainNavbar);