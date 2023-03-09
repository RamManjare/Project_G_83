import React, { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import mystore from './Store';

export default function MyMessInfo() {

    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [alldata, setAllData] = useState([]);

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        navigate('/Homepage');
    }

    const loadData = async () => {
        var ssss = JSON.parse(localStorage.getItem("loggedinusercon"));
        var iddd = ssss.user_id;
        await fetch("http://localhost:8080/getMySubscriptionList?id=" + iddd)
            .then(res => res.json())
            .then(rcvddata => setData(rcvddata))
        console.log(data.map(e => e.registeredMess.messType.mess_type));
    }


    useEffect(() => {
        loadData()
    }, []);

    let Menu = (e) => {
        var messid = e.target.value;
        localStorage.setItem("menuid", messid);
        //alert(e.target.value);

        navigate("/viewmenu");
    }
    let fedback = (e) => {
        var messid = e.target.value;
        localStorage.setItem("feedbackid", messid);
        //alert(e.target.value);

        navigate("/feedback");
    }


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
                    <li className="nav-item"><Link className="nav-link" to="/AllMessInfo" style={{ color: "blue" }}><b>Available Mess Details</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/mymess" ><b>Registered Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>


            </nav>
            <br /><br />
            <h3 style={{ color: "black" }}> My-Messes Information --</h3>
            <br /><br />
            <Table striped bordered hover responsive="md">
                <thead style={{ color: "darkgreen" }}>
                    <tr>
                        <td><b>Mess ID</b></td>
                        <td><b>Mess Name</b></td>
                        <td><b>Mess Type</b></td>
                        <td><b>Mess Area</b></td>
                        <td><b>StartDate</b></td>
                        <td><b>End-Date</b></td>
                        <td><b>See-Menu</b></td>
                        <td></td>
                    </tr>
                </thead>

                {
                    data.map((v) => {
                        return (
                            <tbody >
                                <tr  >
                                    <td style={{ color: "red" }}>{v.mess_id}</td>
                                    <td style={{ color: "red" }}>{v.registeredMess.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.registeredMess.messType.mess_type}</td>
                                    <td style={{ color: "red" }}>{v.registeredMess.location}</td>
                                    <td style={{ color: "red" }}>{v.start_date}</td>
                                    <td style={{ color: "red" }}>{v.end_date}</td>
                                    <td><Button variant="info" id="btn" value={v.mess_id} onClick={Menu}>View-Menu</Button></td>
                                    <td><Button variant="info" id="btnn" value={v.mess_id} onClick={fedback}>Provide-Feedback</Button></td>

                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}

