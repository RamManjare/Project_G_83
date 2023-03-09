
import mystore from './Store';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import './style.css';

export default function ProviderHome() {

    let navigate = useNavigate();

    const logout = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });

        localStorage.removeItem("loggedinusercon");

        navigate('/Homepage');
    }

    return (
        <div style={{
            backgroundImage:
                "url('./images/thali.jpg')",
            height: '120vh',
            marginTop: '-10px',
            fontSize: '15px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

            {/* <img src='' height='100' width='100' /> */}

            <nav class="navbar navbar-default">
                <ul className="nav nav-tabs">
                    <li ><img src='images/logo.jpg' height="40" width="40" /> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProviderHome" style={{ color: "blue" }}><b>Home</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProviderProfile" style={{ color: "blue" }}><b>Profile</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ProvideMenu" style={{ color: "blue" }}><b>Provide Menu</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ConsumerList" style={{ color: "blue" }}><b>Consumer List</b></Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/ViewFeedback" style={{ color: "blue" }}><b>View Feedback</b></Link> </li>
                    <li className="nav-item" onClick={logout} ><Link className="nav-link" to="/Homepage" style={{ color: "blue" }}><b>Log Out</b></Link> </li>
                </ul>
            </nav>

            <br /><br />

            <h5 style={{ color: "white", textAlign: "right" }}>  Mess ID : {JSON.parse(localStorage.getItem("loggedinusermess")).mess_id} </h5>
            <h1 className="info" style={{ color: "white" }}> {JSON.parse(localStorage.getItem("loggedinusermess")).mess_name} Mess</h1>


            <br /><br />
            <h4 className="info" style={{ color: "white" }}>Enjoy Our Service...</h4>
            <img src='images/logo.jpg' height="80" width="80" />
            <br />


        </div>
    )



}
