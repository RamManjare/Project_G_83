import React from "react";
import { ButtonToolbar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css';

export default class PendingMessApproval extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allpending: [],
            msg: ""
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/pendingApprovals")
            .then(res => res.json())
            .then(data => this.setState({ allpending: data }))
    }



    submitForm1 = (ev) => {
        ev.preventDefault();


        let val;

        val = ev.target.id;

        this.setState({ messid: val })
        alert("Processing.......");

        console.log(val);


        fetch("http://localhost:8080/provideapprovalformess?messid=" + val)
            .then(resp => resp.json())
            .then(data => {
                if (data != 0)

                    this.setState({ msg: "Approval provided  " })

                else

                    this.setState({ msg: "Approval Not Provided  " })
            })


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
                        <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{ color: "blue" }}><b>Pending Mess Approvals</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/DeletePreviousMenus" style={{ color: "blue" }}><b>Delete Previous Menus </b></Link> </li>

                    </ul>
                </nav>

                <br /><br />
                <h3 className="info" style={{ color: "white" }}>-- Pending Messes for Approval --</h3>
                <br /><br />
                <Table striped bordered hover responsive="md">
                    <thead style={{ color: "white" }}>
                        <tr>
                            <td><b>Mess ID</b></td>
                            <td><b>Mess Owner Name</b></td>
                            <td><b>Mess Owner Contact No</b></td>
                            <td><b>Mess Owner ID Proof </b></td>
                            <td><b>Mess License No </b></td>
                            <td><b>Provide Approval</b></td>
                        </tr>
                    </thead>

                    {
                        this.state.allpending.map((v) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td style={{ color: "white" }} >{v.messid}</td>
                                        <td style={{ color: "white" }}>{v.ownername}</td>
                                        <td style={{ color: "white" }}>{v.contactno}</td>
                                        <td style={{ color: "white" }}>{v.idproof}</td>
                                        <td style={{ color: "white" }}>{v.licenseno}</td>
                                        <td><Button id={v.messid} bsStyle="success" type="submit" onClick={this.submitForm1} > Approve </Button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </Table>
                <p className="info">{this.state.msg}</p>
            </div>
        )
    }
}