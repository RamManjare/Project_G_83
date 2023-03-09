import { Link, useNavigate } from "react-router-dom";
import mystore from "./Store";


let MessOwnerProfile = () => {

    let navigate = useNavigate();

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("messOwnerData");

        navigate('/Homepage');
    }

    var data = JSON.parse(localStorage.getItem("messOwnerData"));
    return (
        <div>
            <div style={{
                backgroundImage:
                    "url('./images/thali.jpg')",
                height: '120vh',
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
                        <li className="nav-item"><Link className="nav-link" to="/RegisterMess" style={{ color: "blue" }}><b>Register Mess</b></Link> </li>
                        <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" ><b>Log Out</b></Link> </li>
                    </ul>
                </nav>
                <h4 style={{ color: "red" }}> User-Id ID :  {data.user_id} </h4>
                <h4 className='info' style={{ color: "red" }}> Name :  {data.name}  </h4>
                <h4 className='info' style={{ color: "red" }}> Address : {data.address} </h4>
                <h4 className='info' style={{ color: "red" }}>Email Id :  {data.email_id}  </h4>
            </div>
        </div>
    )
}
export default MessOwnerProfile;