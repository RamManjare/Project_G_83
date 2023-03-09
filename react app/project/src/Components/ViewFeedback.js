import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import mystore from "./Store";

let ViewFeedback = () => {

    const [feedback, setData] = useState([]);
    const loadData = async () => {
        const res = await fetch("http://localhost:8080/getAllRatings");
        setData(await res.json());
    };

    var navigate = useNavigate();

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }

    useEffect(() => { loadData() }, []);
    console.log(feedback);

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
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/MessOwnerProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/registerMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>

            <Table >
                <thead style={{ color: "green" }}>
                    <tr>
                        <td><b>Stars</b></td>
                        <td><b>Mess Name</b></td>
                        <td><b>Date Of Review</b></td>
                        <td><b>Review</b></td>
                    </tr>
                </thead>
                {
                    feedback.map((v) => {
                        return (
                            <tbody>
                                <tr>
                                    <td style={{ color: "red" }}>{v.stars}</td>
                                    <td style={{ color: "red" }}>{v.registeredMess.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.review_date}</td>
                                    <td style={{ color: "blue" }}>{v.review}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}
export default ViewFeedback;