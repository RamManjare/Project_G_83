import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";

let AdminHome = () => {
    let navigate = useNavigate();
    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("adminData");

        navigate('/Homepage');
    }

    var data = JSON.parse(localStorage.getItem("adminData"));
   
    return (
        <div>
            {/* <h1>hi sagar</h1> */}
            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/AdminHome" style={{ color: "blue" }}><b>HomePage</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/PendingApprovals" style={{ color: "blue" }}><b>Pending Mess Approvals</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
             
                </ul>
            </nav>
            <p />
            <br />
            <br />
            <h1 style={{ color: "red" }}>Welcome {data.name}</h1>

        </div>
    )
}
export default AdminHome;