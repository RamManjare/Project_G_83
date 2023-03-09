import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import mystore from "./Store";

let PendingApprovals = () => {
    let navigate = useNavigate();
    const [feedback, setData] = useState([]);

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("adminData");

        navigate('/Homepage');
    }

    const loadData = async () => {
        const res = await fetch("http://localhost:8080/pendingApprovals");
        setData(await res.json());
    };

    useEffect(() => { loadData() }, []);
    const [flag, setFlag] = useState(false);
    const approve = (v) => {
        console.log("calling server API" + v.target.value)
        fetch("http://localhost:8080/approveMess?id=" + v.target.value)
            .then(resp => resp.json())
            .then(out => {
                setFlag(out);

                console.log(flag.length + "-------------");

                if (flag !== undefined) {
                    alert("Succesfully Approved");
                    console.log("Success");
                    window.location.reload(false);
                }
            })

    }

    const reject = (v) => {
        console.log("calling server API" + v.target.value)
        fetch("http://localhost:8080/rejectMess?id=" + v.target.value)
            .then(resp => resp.json())
            .then(out => {
                setFlag(out);

                console.log(flag.length + "-------------");

                if (flag !== undefined) {
                    alert("Mess Registration Rejected");
                    console.log("Success");
                    //navigate('/MessOwnerHome');
                    window.location.reload(false);
                }
            })

    }

    return (
        <div>
            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{ color: "blue" }}><b>HomePage</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{ color: "blue" }}><b>Pending Mess Approvals</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                </ul>
            </nav>
            <p><b> Pending Approvals List</b></p>
            <Table >
                <thead style={{ color: "green" }}>
                    <tr>
                        <td><b>Mess Name</b></td>
                        <td><b>Mess ID</b></td>
                        <td><b>Mess Type</b></td>
                        <td><b>Location</b></td>
                    </tr>
                </thead>
                {
                    feedback.map((v) => {
                        return (
                            <tbody>
                                <tr>
                                    <td style={{ color: "red" }}>{v.mess_name}</td>
                                    <td style={{ color: "red" }}>{v.mess_id}</td>
                                    <td style={{ color: "blue" }}>{v.messType.mess_type}</td>
                                    <td style={{ color: "blue" }}>{v.location}</td>
                                    <td style={{ color: "blue" }}><Button variant="success" value={v.mess_id} onClick={approve}>Approve</Button></td>
                                    <td style={{ color: "blue" }}><Button variant="danger" value={v.mess_id} style={{ backgroundColor: "red" }} onClick={reject}>Reject</Button></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>

        </div>
    )
}
export default PendingApprovals;