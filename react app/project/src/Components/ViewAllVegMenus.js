import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default class ViewAllVegMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allvegmenu: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/getallvegmenu")
            .then(res => res.json())
            .then(data => this.setState({ allvegmenu: data }));
    }

    render() {
        return (
            <div className="info" style={{
                backgroundImage:
                    "url('images/gallery_10.jpg')",
                height: '100vh',
                marginTop: '-10px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                <nav class="navbar navbar-default">
                    <ul className="nav nav-tabs">
                        <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/SelectMess" style={{ color: "blue" }}><b>Select Mess</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewMenu" style={{ color: "blue" }}><b>View Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewAllVegMenu" style={{ color: "blue" }}><b>All Veg Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewAllNonVegMenu" style={{ color: "blue" }}><b>All Non Veg Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerFeedback" style={{ color: "blue" }}><b>Provide Feedback</b></Link> </li>
                    </ul>
                </nav>
                <br /><br />
                <h3 style={{ color: "white" }}>--Todays All Available Mess Veg Menus --</h3>
                <br /><br />
                <Table striped bordered hover responsive="md">
                    <thead style={{ color: "tomato" }}>
                        <tr>
                            <td><b>Mess Name</b></td>
                            <td><b>Mess Area</b></td>
                            <td><b>Status</b></td>
                            <td><b>Curry 1</b></td>
                            <td><b>Curry 2</b></td>
                            <td><b>Bread Type</b></td>
                            <td><b>Rice</b></td>
                            <td><b>Starter</b></td>
                            <td><b>Sweet Dish</b></td>
                            <td><b>Thali Type</b></td>
                            <td><b>Special Dish</b></td>
                        </tr>
                    </thead>

                    {
                        this.state.allvegmenu.map((v) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td style={{ color: "white" }}>{v.messid.messname}</td>
                                        <td style={{ color: "white" }}>{v.messid.area}</td>
                                        <td style={{ color: "white" }}>{v.menustatus}</td>
                                        <td style={{ color: "white" }}>{v.curry1}</td>
                                        <td style={{ color: "white" }}>{v.curry2}</td>
                                        <td style={{ color: "white" }}>{v.breadtype}</td>
                                        <td style={{ color: "white" }}>{v.rice}</td>
                                        <td style={{ color: "white" }}>{v.starter}</td>
                                        <td style={{ color: "white" }}>{v.sweetdish}</td>
                                        <td style={{ color: "white" }}>{v.thalitype}</td>
                                        <td style={{ color: "white" }}>{v.specialdish}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
        )
    }
}