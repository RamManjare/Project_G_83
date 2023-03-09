import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default class ViewAllNonVegMenus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allnonvegmenu: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/getallnonvegmenu")
            .then(res => res.json())
            .then(data => this.setState({ allnonvegmenu: data }));
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
                <h3 style={{ color: "white" }}>--Todays All Available Mess Non-Veg Menus --</h3>
                <br /><br />
                <Table striped bordered hover responsive="md">
                    <thead style={{ color: "tomato" }}>
                        <tr>
                            <td><b>Mess Name</b></td>
                            <td><b>Mess Area</b></td>
                            <td><b>Status</b></td>
                            <td><b>Curry </b></td>
                            <td><b>Bread Type</b></td>
                            <td><b>Rice</b></td>
                            <td><b>Fry</b></td>
                            <td><b>Cold Drinks</b></td>
                        </tr>
                    </thead>

                    {
                        this.state.allnonvegmenu.map((v) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td style={{ color: "white" }}>{v.messid.messname}</td>
                                        <td style={{ color: "white" }}>{v.messid.area}</td>
                                        <td style={{ color: "white" }}>{v.menustatus}</td>
                                        <td style={{ color: "white" }}>{v.curry}</td>
                                        <td style={{ color: "white" }}>{v.breadtype}</td>
                                        <td style={{ color: "white" }}>{v.rice}</td>
                                        <td style={{ color: "white" }}>{v.fry}</td>
                                        <td style={{ color: "white" }}>{v.colddrink}</td>
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