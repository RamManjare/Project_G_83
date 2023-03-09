import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import mystore from "./Store";

let ConsumerList = () => {

    const [data, setData] = useState([]);

    var user = JSON.parse(localStorage.getItem("messOwnerData"));

    var navigate = useNavigate();
    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }


    const loadData = async () => {
        const res = await fetch("http://localhost:8080/getCustomerListById?id=" + user.user_id);
        setData(await res.json());
    };

    useEffect(() => { loadData() }, []);

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
            <nav className="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/RegisterMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <h3 style={{ color: "black" }}>-- All Consumer List --</h3>
            <br /><br />
            <Table striped bordered hover responsive="md" style={{ border: "1" }}>
                <thead style={{ color: "green" }}>
                    <tr>
                        <td><b>Consumer ID</b></td>
                        <td><b>Consumer Name</b></td>
                        <td><b>Contact no</b></td>
                        <td><b>Mail ID</b></td>
                    </tr>
                </thead>
                {
                    data.map((v) => {
                        return (
                            <tbody>
                                <tr>
                                    <td style={{ color: "red" }}>{v.user_id}</td>
                                    <td style={{ color: "red" }}>{v.userInfo.name}  </td>
                                    <td style={{ color: "red" }}>{v.userInfo.contact_number}</td>
                                    <td style={{ color: "red" }}>{v.userInfo.email_id}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )

}
export default ConsumerList;