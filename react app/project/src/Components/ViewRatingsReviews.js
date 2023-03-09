import React from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default class ViewRatingsReviews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allratingsreviews: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/getallratingsreviews?messid=" + JSON.parse(localStorage.getItem("loggedinusermess")).messid.messid)
            .then(res => res.json())
            .then(data => this.setState({ allratingsreviews: data }))
    }

    render() {
        return (
            <div className="info" style={{
                backgroundImage:
                    "url('./images/thali.jpg')",
                height: '130vh',
                marginTop: '-10px',
                fontSize: '15px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <nav class="navbar navbar-default">
                    <ul className="nav nav-tabs">
                        <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProviderHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProviderProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>

                    </ul>
                </nav>


                <br /><br />
                <h3 style={{ color: "white" }}>-- Available Ratings and Reviews --</h3>
                <br /><br />
                <Table striped bordered hover responsive="md">
                    <thead style={{ color: "white" }}>
                        <tr>
                            <td><b>Ratings</b></td>
                            <td><b>Reviews</b></td>
                        </tr>
                    </thead>

                    {
                        this.state.allratingsreviews.map((v) => {
                            return (
                                <tbody >
                                    <tr  >
                                        <td style={{ color: "white" }}>{v.rating}</td>
                                        <td style={{ color: "white" }}>{v.review}</td>

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