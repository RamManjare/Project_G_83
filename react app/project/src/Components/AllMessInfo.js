import React, { useEffect, useState } from "react";
import './style.css';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import mystore from './Store';

export default function AllMessInfo()   // Using Functional Component
{
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        localStorage.removeItem("loggedinuservegmenu");

        navigate('/Homepage');
    }


    const loadData = async () => {
        await fetch("http://localhost:8080/getAllMess")
            .then(resp => resp.json())
            .then(info => setData(info))
    }

    useEffect(() => { loadData() }, []);

    let getvalue = (e) => {
        var messid = e.target.value;
        localStorage.setItem("getMessid", messid);
        //alert(e.target.value);
        navigate("/select");
    }
    let Menu = (e) => {
        var messid = e.target.value;
        localStorage.setItem("menuid", messid);
        //alert(e.target.value);
        navigate("/viewmenu");
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
                    <li className="nav-item"><Link className="nav-link" to="/mymess" ><b>Subscribed Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <br /><br />
            <h3 style={{ color: "black" }}>-- Available Messes Information --</h3>
            <br /><br />
            <Table striped bordered hover responsive="md">
                <thead style={{ color: "darkgreen" }}>
                    <tr>
                        <td><b>#</b></td>
                        <td><b>Mess ID</b></td>
                        <td><b>Mess Name</b></td>
                        <td><b>Mess Type</b></td>
                        <td><b>Mess Area</b></td>
                        <td><b>Menu</b></td>
                        <td><b>Subscribe this Mess</b></td>
                    </tr>
                </thead>

                {
                    data.map((v, i) => {
                        return (
                            <tbody>
                                <tr key={i + 1}>
                                    <td style={{ color: "red" }}>{i}</td>
                                    <td style={{ color: "red" }}>{v.mess_id}</td>
                                    <td style={{ color: "red" }}>{v.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.messType.mess_type}</td>
                                    <td style={{ color: "red" }}>{v.location}</td>
                                    <td><button name={v.mess_name} class="btn btn-primary" id="btn" value={v.mess_id} onClick={Menu}>View-Menu</button></td>
                                    <td><button name={v.mess_name} class="btn btn-primary" id="btn" value={v.mess_id} onClick={getvalue}>Join</button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>

        </div>
    )

}
